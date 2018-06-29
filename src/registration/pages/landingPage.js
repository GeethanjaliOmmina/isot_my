import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  './landingPage.css';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back5.jpg`})`,
    // display:"block",
};
class LandingPage extends Component {
    render() {
        return (
            <section style={sectionStyle}>
               <div id="con1">
               <Link to={'/login'}><button name="login" value="Login">Login</button></Link> 
               <Link to={'/adminregister'}><button name="admin_signup" value="Admin_SignUp">Admin SignUp</button></Link> 
               <Link to={'/interviewerregister'}><button name="interviewer_signup" value="Interviewer_SignUp">Interviewer SignUp</button></Link>
                </div>
                <br/><br/>
                <div id="para">
                <h2> WELCOME TO ISLOT</h2><br/>
                <p>
                <i>VIRTUSA PRESENTS ISLOT AS A INTERNAL APPLICATION IN ORDER TO BREAK THE BARRIER OF COMMUNICATION FOR THE RECRUITMENT TEAM IN BETWEEN THE INTERVIEWER AND THE HR AND MAKING THEIR WORK SIMPLER.</i>
                </p>
                </div>
            </section>
        );
    }
}
export default LandingPage;