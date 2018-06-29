import React, { Component } from 'react';
import './login.css';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back4.jpg`})`,
};
class Login extends Component {
    render() {
        return (
            <section style={sectionStyle}>
             <br/><br/><br/><br/>
            <div class="container3">
            <h2>User Login</h2><br/>
            <div class="form-group">
                        {/* <label class="control-label col-sm-2" htmlfor="username">UserName:</label> */}
                        <div class="col-sm-10">
                        <label class="control-label l1 col-sm-2" htmlfor="username">UserName:</label>

                            <input type="text" class="form-control" id="uname" placeholder="Enter UserNmame" name="uname" />
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class="form-group">
                        {/* <label class="control-label col-sm-2" htmlfor="pwd">Password:</label> */}
                        <div class="col-sm-10">
                        <label  class="control-label l1 col-sm-2" htmlfor="pwd">Password:</label>

                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary" id="but1">Submit</button>
                        </div>
                    </div>
            </div>
            </section>
        );
    }
}
export default Login;            
