import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true} component={HomePage}/>
        <Route path='' exact={true} component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
