import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router';



function Name() {
  return (
    
      <div>
         <p className="info">What do you want to call me</p>
         <hr/>
          <Link to="/MyName" className="main-btn">Next</Link>
        
      </div>

  );
}

export default Name;
