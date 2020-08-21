import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'
import './App.css';

const HatsPage = ()=>{
  return (
    <div>hats page</div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hats" exact ={true} component={HatsPage}/>
        <Route path='/' exact={true} component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
