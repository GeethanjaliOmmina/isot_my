import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  './landingPage.css';
class LandingPage extends Component {
    render() {
        return (
            
            <div id="con">
               <Link to={'/login'}><button name="login" value="Login">Login</button></Link> 
               <Link to={'/adminregister'}><button name="admin_signup" value="Admin_SignUp">Admin SignUp</button></Link> 
               <Link to={'/interviewerregister'}><button name="interviewer_signup" value="Interviewer_SignUp">Interviewer SignUp</button></Link>
            </div>
            
        );
    }
}

export default LandingPage;