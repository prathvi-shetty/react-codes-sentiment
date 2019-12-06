import React , { Component } from 'react';
import Counter from './counter'
class Counters extends Component{
    
    render(){
        return (
            <div>
                <button onClick ={this.props.onReset}
                className="btn-primary btn-sm"> Reset </button>
              { this.props.counters.map(counter => <Counter key = {counter.id} counter = {counter} onDelete = {this.props.onDelete} onIncrement ={this.props.onIncrement}>
                  {/* <h1>headding {counter.key}</h1> {/* passing children */} 
                   </Counter>)}
               
            </div>

        )// attributes set for the above counter is passed to the component using a single js object called props
    }

}

export default Counters;