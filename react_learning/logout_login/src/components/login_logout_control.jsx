import React, { Component } from 'react';
import Login from './login';
import Logout from './logout'
import Greeting from './greeting'
class Login_logout extends Component {
    state = { islogin : false };
    handle_login =()=>{
        this.setState({islogin : true});
    }
    handle_logout= () =>{
        this.setState({islogin : false})
    }
    render() { 
        let button
        if(this.state.islogin){
        {/* button =  <button onClick = {this.handle_logout}>Logout</button> */}
            button = <Logout onClick = {this.handle_logout}></Logout>
        }
        else{
         {/*   button = <button onClick = {this.handle_login}>Login</button> */}
         button = <Login onClick = {this.handle_login}></Login>
        }
        return (
            <div>
                <Greeting islogin = {this.state.islogin}/>
                {button}
            </div>
          );
    }
}
 
export default Login_logout;