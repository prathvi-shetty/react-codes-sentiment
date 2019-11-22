import React, {Component} from 'react'
class Counter extends Component {
    state = {
        count : 0,
        team_members : []
        
    };
    // constructor(){
    //     super();
    //     this.handle_increment = this.handle_increment.bind(this);
    // } This has to be done if handle_increment is defined as a normal function. This has to be done everytime an event is to be defined
    render_tags(){
        if (this.state.team_members.length === 0) return <h1>NO TAGS</h1>
        return <ul>{this.state.team_members.map(member => <li key = {member}>{member}</li>)}</ul> 
        //conditional rendering 
        
    }
    // handle_increment(){
    //     console.log('Increment handled'+ this)
        
    // }
    //below function is an arrow function
    handle_increment = (product) =>{
        console.log('Increment handled'+this)
        console.log(product)
        this.setState({ count : this.state.count + 1});// In react the state changes have to be explicitly mentioned
    }
    
    render(){
        
        return(
        
         <React.Fragment><h1>Sentiment analysis</h1>
         <span  className = {this.get_class()} >{this.show_counter()}</span>
         <button  onClick={() => this.handle_increment('product')} className = "btn btn-secondary btn-lg">Increment</button>
         <ul>{this.state.team_members.map(member => <li key = {member}>{member}</li>)}</ul>  
         <div>{this.state.team_members.length === 0 && "No elements present"}</div>
         <div>{this.render_tags()}</div>
        </React.Fragment>);//bootstraping , rendering the list 
        // <button  onClick={this.handle_increment} className = "btn btn-secondary btn-lg">Increment</button> if without arguments
        
    }
   
    get_class() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    show_counter(){
        const {count} = this.state; //const are used for variables that will not be modified
        return count === 0 ? <h1>'ZERO'</h1> : <h1>{count}</h1> ;
    }
}

export default Counter ;