import React, { Component } from 'react';

class SignupInterviewer extends Component {
    render() {
        return (
<div>
        <h3>Interviewer Registration</h3>
        <form>
            <div align="center">
                Username :
                <input type="text" name="username" />
                <br />
                <br/> Password :
                <input type="password" name="pwd" />
                <br />
                <br/> Email :
                <input type="email" name="email" />
                <br />
                <br/> Mobile Nimber :
                <input type="tel" name="mobile_number" />
                <br />
                <br/> Skills :
                <select id="skills" multiple>
                    <option value="1">Javascript</option>
                    <option value="2">JQuery</option>
                </select>
                <br/>
                <br/>
                <input type="reset" value="Clear" />
                <input type="submit" value="Register" />
            </div>
            </form>
            </div>
           );
    }
}

export default SignupInterviewer;