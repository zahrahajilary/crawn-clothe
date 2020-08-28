import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header-component";
import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.actions";
import SingInAndSingUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";
import {createUserProfileDocument} from "./firebase/firbase.utils";
import {auth} from "./firebase/firbase.utils";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import CheckoutComponent from "./pages/checkout/Checkout.component";

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
                    <Route path='/singin' exact={true} component={SingInAndSingUpPage}
                           render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SingInAndSingUpPage/>)}/>
                    <Route path='/checkout' exact component={CheckoutComponent}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
