import React, { Component } from 'react';
import "./signupInterviewer.css";
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back4.jpg`})`,
};
class SignupInterviewer extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <br/><br/>
            {/* <h3>Interviewer Registration</h3><br/> */}
            <div className="container7">
            <h3>Interviewer Registration</h3><br/>
                    <div >
                    <label class="control-label col-sm-2" htmlfor="uname">Username</label>
                    {/* <label class="control-label col-sm-2" htmlfor="uname">Username</label> */}
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="uname" placeholder="Enter username" /><br/>
                    </div>
                    </div>
                    
                    
                    <div >
                    <label class="control-label col-sm-2" htmlfor="pwd">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" /><br/>
                    </div>
                    </div>
                     <div >
                    <label class="control-label col-sm-2" htmlfor="email">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Enter email" /><br/>
                    </div>
                     </div>
                    <div  >
                    <label htmlfor="mobilenumber" class="col-sm-2 control-label">MobileNumber</label>
                    <div class="col-sm-10">
                        <input class="form-control" type="tel" id="mobile_number" placeholder="Enter MobileNumber" /><br/>
                    </div>
                     </div>    
                    <div>
                    <label htmlfor="skills" class="control-label col-sm-2">Skills</label>
                    <select multiple class="col-xs-2" id="skills">
                        <option>Javascript</option>
                        <option>jquery</option>
                    </select>
                    </div>
                    <br /><br />
                    <div class=" col-xs-10">
                        <button type="reset" class="btn btn-primary" id="but">Clear</button>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                    </div>
            </section>
        )
    }
}

export default SignupInterviewer ;