import React, { Component } from 'react';
import Usergreeting from './usergreeting'
import Guestgreeting from './guestgreeting'
class Greeting extends Component {

    render() { 
        
            if(this.props.islogin){
                return(<Usergreeting/>)
            }
            else{
                return(<Guestgreeting/>)
            }
        
    }
}
 
export default Greeting;