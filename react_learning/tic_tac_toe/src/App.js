import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar from './components/navbar'
import Counters from './components/counters'
import Counter from './components/counter';

class App extends Component {
  state = {
    counters : [
        {id: 1 , value: 4},
        {id: 2 , value:0},
        {id: 3 , value:0},
        {id: 4 , value:0}

    ]
};
constructor(){
  super()
  console.log('Initialized')
}
componentDidMount(){
  console.log('mounted')
}
handleReset = ()=> {
    const counters = this.state.counters.map(c => {
        c.value =0;
        return c;
    });
    this.setState({counters})
}
handleDelete = (counterid) => {
    console.log("Delete event handled", counterid)
    const counters = this.state.counters.filter(c => c.id !== counterid)
    this.setState({counters : counters})
    //since both the key and values are same it can be reduced to this.setState({counters})
}
handleIncrement = (counter) => {
   const counters = [...this.state.counters]
   const index = counters.indexOf(counter)
   counters[index] = {...counter}
   console.log(index)
   console.log(counters)
   counters[index].value +=1
   this.setState({counters})
   console.log(this.state.counters[index])
}
  render(){
  return (
    <React.Fragment>
    <Navbar totalCounters = {this.state.counters.length}/>
      <main className = "container">
        <Counters onReset= {this.handleReset} onDelete= {this.handleDelete} onIncrement = {this.handleIncrement} counters = {this.state.counters}/>
      </main></React.Fragment>
    
  )};
}

export default App;
