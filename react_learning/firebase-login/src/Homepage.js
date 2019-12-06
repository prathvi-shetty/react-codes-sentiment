import React from "react";
import axios from 'axios';

  
export class HomePage extends React.Component{
    state = {
        keyword:'',
      }
       handleSubmit(e) {
        e.preventDefault();
        const data = { keyword : this.state.keyword};
        console.log(data)
        console.log('submit');
        console.log(this.state.keyword);
        const url = `http://127.0.0.1:5000/api?keyword=RETAIL%20SAUDIssss`;
        axios.post('http://127.0.0.1:5000/api?keyword='+this.state.keyword)
          .then(console.log('helo there'))
          
      }
      handleChange(e) {
        this.setState({keyword:e.target.value});
      }
    render(){
        return(

            <div>
                 <input
        type="text"
        value={this.state.keyword}
        onChange={this.handleChange.bind(this)}
      />
      <button onClick = {this.handleSubmit.bind(this)}> submit </button>
                 
            </div>
            
            
        );
    }

}
export default HomePage;