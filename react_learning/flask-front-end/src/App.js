import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SignIn from './components/singnin';
import Navbar from './components/Navbar';
import { HomePage } from './components/Homepage';
import SignUp from './components/signup';



class App extends Component{
  

  
  render (){return (
   <Router>
      <div>
      <nav class ="navbar navbar-dark bg-primary">
      <Link to="/homepage">HomePage</Link>
      <br/>
      <Link to="/signin/">SignIn</Link>
      <br></br>
      <Link to="/signup/">SignUp</Link>
          
     
      <Route path ="/homepage" component={HomePage}/>
      <Route path="/signin/" component={SignIn} />
      <Route path="/signup/" component={SignUp} />
      </nav>
      
    </div>
  </Router>
     
    
    
  );}
}

export default App;
