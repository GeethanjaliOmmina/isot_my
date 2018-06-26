import React, { Component } from 'react';
import './login.css';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/img2.jpg`})`,
};
class Login extends Component {
    render() {
        return (
            <section style={sectionStyle}>
             <br/><br/><br/><br/>
            <div class="container3">
            <h3>User Login</h3><br/>
            <div class="form-group">
                    <div>
                        <label class="control-label col-sm-2" htmlfor="username">UserName:</label>
                        <div class="col-sm-10">
                               <input type="text" class="form-control" id="uname" placeholder="Enter UserNmame" name="uname" />
                        </div>
                    </div>
            </div><br/>   <br/>
                    <br/>
             <div class="form-group">
                    <div>
                        <label class="control-label col-sm-2" htmlfor="pwd">Password:</label>
                        <div class="col-sm-10">
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                        </div>
                    </div>
             </div> <br/><br/>
             <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
            </div>
            </section>
        );
    }
}
export default Login;            
