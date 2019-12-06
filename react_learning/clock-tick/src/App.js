import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  state = {
    date : this.props.date,
  }
  tick(){
    this.setState({date : new Date()})
  }
  componentDidMount(){
    this.timer = setInterval(() => this.tick(),1000)
  }
 
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  
 render(){ return(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      
    </div>
  
  )};
    
}


export default App;
