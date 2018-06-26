import React, { Component } from 'react';

class SignupAdmin extends Component {
    render() {
        return (
            <div>
        Admin Registration
            <div  align="center">
                Username         : <input type="text" name="username" /><br /><br/>
                Password         : <input type="password" name="pwd" /><br /><br/>
                Email            : <input type="email" name="email" /><br /><br/>
                Mobile Number       : <input type="tel" name="mobile_number" /><br /><br/>
                Location         : <select id = "location">
                                        <option value = "1">chennai</option>
                                        <option value = "2">hyderabad</option>
                                        <option value = "3">banglore</option>
                                    </select><br /><br/>
            <input type="reset" value="Clear" />
            <input type="submit" value="Register" />
    </div>
    </div>
        );
    }
}

export default SignupAdmin;