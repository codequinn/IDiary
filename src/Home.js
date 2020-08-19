import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router';



function Home() {
  return (
    
      <div>
          <p className="info">Always wanted to take note your daily experiences <br></br> online? <br></br> iDiary is for ya!</p>
          <Link to="/Login" className="main-btn">Get Started</Link>
        
      </div>

  );
}

export default Home;
