import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from 'react'
import './App.css'

import HeaderComponent from './components/HeaderComponent';
import ListGatewayComponent from './components/ListGatewayComponent';
import CreateGatewayComponent from './components/CreateGatewayComponent';
import ViewGatewayComponent from './components/ViewGatewayComponent' ;
import UpdateGatewayComponent from './components/UpdateGatewayComponent';
//import { Router, Route } from 'react-router'

function App() {
  return (
    <div className="App">
     <Router>

      <HeaderComponent/>
      <div classname='container'>
        <Switch>
          <Route path="/" exact component={ListGatewayComponent}></Route>
          <Route path="/gateways" exact component={ListGatewayComponent}></Route> 
          <Route path="/add-gateway/:id" component ={CreateGatewayComponent}></Route>
          <Route path="/view-gateway/:id" component= {ViewGatewayComponent}></Route>
          <Route path="/update-gateway/:id" component = {UpdateGatewayComponent}></Route>
        </Switch>
      </div>
      </Router> 
    </div>
  );
}

export default App;
