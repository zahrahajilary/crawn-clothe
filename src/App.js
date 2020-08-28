import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header-component";
import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.actions";
import SingInAndSingUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";
import {createUserProfileDocument} from "./firebase/firbase.utils";
import {auth} from "./firebase/firbase.utils";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async useAuth => {
            if (useAuth) {
                const userRef = await createUserProfileDocument(useAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            } else {
                setCurrentUser(useAuth)
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path='/' exact={true} component={HomePage}/>
                    <Route path='/shop' exact={true} component={ShopPage}/>
                    <Route path='/singin' component={SingInAndSingUpPage}/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
