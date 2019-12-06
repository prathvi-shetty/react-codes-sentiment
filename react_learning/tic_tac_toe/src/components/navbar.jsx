import React, { Component } from 'react';
/*class Navbar extends Component {
    
    render() { 
        return (<nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar
        <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></a>
      </nav> );
    }
}*/
//Below is an example of stateless functional component. Here props is supposed to be passed as argument
//const Navbar = (props) => {//passing props. Below lines represent fuction arguments destructuring. Same can be done for objects . This reduces the time this.props is used
const Navbar = ({totalCounters}) => {
    return ( <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
   {/* <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>*/}
   <span className="badge badge-pill badge-secondary">{totalCounters}</span>
  </nav> );
}
 
export default Navbar;
 
