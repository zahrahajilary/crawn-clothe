import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header-component";
import SingInAndSingUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";
import {auth} from "./firebase/firbase.utils";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
            this.setState({
                currentUser:user
            },()=>console.log(this.state.currentUser, 'user'))
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route path='/' exact={true} component={HomePage}/>
                    <Route path='/shop' exact={true} component={ShopPage}/>
                    <Route path='/singin' component={SingInAndSingUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
