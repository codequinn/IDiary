import React from 'react';
import logo from './images/logo.svg'
import './App.css';
import Arrow from './images/arrow.svg'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import { Switch } from 'react-router';
import YourName from './YourName'
import Home from './Home'
import MyName from './MyName'
import Name from './Name'
import Login from './Login'
import SignUp from './SignUp'
function App() {
  return (
    <Router>
       <header className="App" >
        <Link to="/"><img src={logo} alt="idiary logo" /></Link>
       
        <Switch>
          <Route path="/" exact >
            <Home/> 
          </Route>
        
          <Route path="/Login" >
            <Login/> 
          </Route>
          <Route path="/YourName" >
            <YourName/> 
          </Route>
          <Route path="/MyName" >
            <MyName/> 
          </Route>
          <Route path="/Name" >
            <Name/> 
          </Route>
        </Switch>
      </header>
    </Router>
   
  );
}

export default App;
