import React, { Component } from 'react';
class SignUp  extends Component {
    state = { 
        email : '',
        password : '',
        firstname : '',
        lastname : '',
     }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log(e)
    }
    render() {  
        return ( 
            <div className ="container">
                <form onSubmit ={this.handleSubmit} className = "white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className ="input-field">
                        <label htmlFor="email">Email</label>
                        <input type = 'email' id = 'email' onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                        <input type = 'password' id = 'password' onChange={this.handleChange}/>
                        <label htmlFor="firstname">firstname</label>
                        <input type = 'text' id = 'firstname' onChange={this.handleChange}/>
                        <label htmlFor="lastname">lastname</label>
                        <input type = 'text' id = 'lastname' onChange={this.handleChange}/>
                    </div>  
                    <div className = "input-field">
                        <button className="btn green lighten-1 z-depth-0">SignUp</button>
                        </div>   


                </form>
            </div>
         );
    }
}
 
export default SignUp ;