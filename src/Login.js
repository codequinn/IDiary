import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React from 'react';
import { Switch } from 'react-router';
import './App.css';
import Arrow from './images/arrow.svg'

function Login() {
    return (
      
      <div>
        
        <p className="info">Lets Get Started</p>
        <hr/>
        <form>
            <input type="text" className="no-outline name" name="Name" />
           
        </form>
        <Link to="/MyName" className="main-btn">Continue <img className="arrow" src={Arrow} alt="arrow-button"/></Link>
  
      </div>
    );
  }
  
  export default Login;
  