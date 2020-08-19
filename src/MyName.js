import React from 'react';
import Arrow from './images/arrow.svg'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router';

function MyName() {
  return (
    
    <div>
      
      <p className="info">What do you want to call me?</p>
      <hr/>
      <form>
          <input type="text" className="no-outline name" name="Name" />
         
      </form>
      <Link to="/YourName" className="main-btn">Continue <img className="arrow" src={Arrow} alt="arrow-button"/></Link>

    </div>
  );
}

export default MyName;
