import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header-component";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path='/' exact={true} component={HomePage}/>
                <Route path='' exact={true} component={ShopPage}/>

            </Switch>
        </div>
    );
}

export default App;
