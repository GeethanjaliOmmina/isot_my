import React, { Component } from 'react';
import "./signupInterviewer.css";
import {Link} from 'react-router-dom';
var sectionStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${`./images/back0.jpg`})`,
};

class SignupInterviewer extends Component {
        constructor(props) {
            super(props);
            this.state = {

                isValid: 'false',
                name: '',
                id: '',
                password: '',
                confirm_password: '',
                email: '',
                mobile_number: '',
                skills: [],

                form_errors: {
                    name_error: '',
                    password_error: '',
                    confirm_password_error: '',
                    email_error: '',
                    mobile_number_error: '',
                    skills_error: '',
                },

            }
            this.change = this.change.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }



    checkName(value) {
        if (value != "") {
            // document.getElementById("name_error").innerHTML = "";
            return true;
        }
        else {
            return false;
        }
    }

    checkNameContainsNumber(value) {
        for (var i = 0; i < value.length; i++) {
            if (value[i] >= 0 && value[i] <= 9)
                return true;
        }
        return false;
    }

    checkPassword(value) {
        if (value != "") {
            //  document.getElementById("password_error").innerHTML = "";
            return true;
        }
        else {
            return false;
        }
    }

    checkConfirmPassword(value) {
        if (value != "") {
            //document.getElementById("confirm_password_error").innerHTML = "";
            return true;
        }

        return false;

    }

    checkConfirmPasswordMatch(value) {
        var pwd = document.getElementById("userPwd").value;
        if (value != pwd) {
            // document.getElementById("confirm_password_error").innerHTML = "";
            return true;
        }
        return false;
    }
    checkEmail(email) {
        if (email != "") {
            // document.getElementById("email_error").innerHTML = "";
            return true;
        }
        else {
            return false;
        }
    }

    checkVirtusa(email) {
        var s = email.substring(email.length - 12, email.length);
        if (s != "@virtusa.com") {
            return true;
        }
        else {
            return false;
        }
    }

    checkMobNum(value) {
        if (value != "") {
            //document.getElementById("mobile_number_error").innerHTML = "";
            return true;
        }
        else {
            return false;
        }
    }

    checkMobNumLength(value) {
        if (value.length != 10) {
            // document.getElementById("mobile_number_error").innerHTML = "";
            return true;
        }
        else {
            return false;
        }
    }

    checkMobNumContainLetter(value) {
        //alert("inside function");
        if (value.match((/^[1-9][0-9]{9}/))) {
            return false;
            //    console.log(value[i]);
        }
        return true;
    }

    checkSkills(value) {

        if (value.length != 0) {
            //document.getElementById("skills_error").innerHTML = "";
            return true;

        }
        else {
            return false;
        }
    }

    change(name, e) {
        if (name == "skills") {
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            //console.log(value);
        }
        else {
            var value = e.target.value;
        }
        console.log(value);
        this.setState(
            {
                [name]: value

            }
        );
        console.log(this.state.name);
        this.validate(name, value);
    }

    validate(name, value) {
        let form_errors = {};
        if (name == "username") {
            if (!this.checkName(value)) {
                //this.name_error();
                form_errors["name_error"] = "name should not be empty";
            }
            else if (this.checkNameContainsNumber(value)) {
                //this.nameContainsNumber_error();
                form_errors["name_error"] = "name should not contain numbers";
            }
            else {
                form_errors["name_error"] = "";
                this.setState({
                    name: value
                })
            }

        }
        else if (name == "password") {
            if (!this.checkPassword(value)) {
                //this.password_error();
                form_errors["password_error"] = "password is required";
            }
            else {
                form_errors["password_error"] = "";
                this.setState({
                    password: value
                })
            }
            console.log(this.state.password);
        }
        else if (name == "confirm_password") {
            if (!this.checkConfirmPassword(value)) {
                form_errors["confirm_password_error"] = "password is required";
                //this.confirm_password_error();
            }
            else if (this.checkConfirmPasswordMatch(value)) {
                //this.confirm_password_match_error();
                form_errors["confirm_password_error"] = "password is not matching";
            }
            else {
                form_errors["confirm_password_error"] = "";
            }
        }
        else if (name == "email") {
            if (!this.checkEmail(value)) {
                //this.email_error();
                form_errors["email_error"] = "email is required";
            }
            else if (this.checkVirtusa(value)) {
                //this.virtusa_error();
                form_errors["email_error"] = "email is not valid";

            }
            else {
                form_errors["email_error"] = "";
            }
        }
        else if (name == "mobile_number") {
            if (!this.checkMobNum(value)) {
                //this.mobile_number_error();
                form_errors["mobile_number_error"] = "mobile number is required";
            }
            else if (this.checkMobNumLength(value)) {
                //this.mobile_number_length_error();
                form_errors["mobile_number_error"] = "mobile number length should be 10";
            }
            else if (this.checkMobNumContainLetter(value)) {
                //this.mobile_number_contain_letter_error();
                form_errors["mobile_number_error"] = "mobile number should not contain letter";
            }

            else {
                form_errors["mobile_number_error"] = "";
                // this.setState({
                //     mobile_number: value
                // })
            }
        }
        else if (name == "skills") {
            if (!this.checkSkills(value)) {
                //this.skills_error();
                form_errors["skills_error"] = "skills is required";
            }

            else {
                form_errors["skills_error"] = "";
            }
        }
     this.setState({
             form_errors: form_errors
         })
    }

    onSubmit(e) {
        var self = this;
        console.log('Submitted');
        fetch('https://perl-react-project.firebaseio.com/user.json').then(res => res.json())
            .then(function (data) {
                var d = Object.keys(data).length;
                self.setState(
                    {
                        id: d
                    }
                )

                fetch('https://perl-react-project.firebaseio.com/user.json', {

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "Email": self.state.email,
                        "Mobile": self.state.mobile,
                        "Name": self.state.name,
                        "Password": self.state.password,
                        "Locations": self.state.locations,
                        "Skills" : self.state.skills,
                        "id": d,
                        "eventPoints": [{
                            eventName: "",
                            eventId: "",
                            eventDate: "",
                            points: ""
                        }]
                    })
                })


            });
    }

    render() {
        return (
            <section style={sectionStyle}>
                <br/> <br/>
            {/* <h3>Admin Registration</h3><br/> */}
            <div className="container7">
            <h3>Inteerviewer Registration</h3><br/>                       
                            <div >
                                <label class="control-label col-sm-2" htmlfor="username">Username</label>
                                {/* <label class="control-label col-sm-2" htmlfor="uname">Username</label> */}
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="username" placeholder="Enter username" onChange={this.change.bind(this, 'username')} /><br />
                                </div>
                                <span id="name_error">{this.state.form_errors["name_error"]}</span>
                            </div>


                            <div >
                                <label class="control-label col-sm-2" htmlfor="password">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id= "userPwd" name="password" placeholder="Enter password" onChange={this.change.bind(this, 'password')} /><br />
                                </div>
                                <span id="password_error">{this.state.form_errors["password_error"]}</span>
                            </div>
                            <div >
                                <label class="control-label col-sm-2" htmlfor="confirm_password">Confirm Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="confirm_password" placeholder="Enter password" onChange={this.change.bind(this, 'confirm_password')} /><br />
                                </div>
                                <span id="confirm_password_error">{this.state.form_errors["confirm_password_error"]}</span>
                            </div>

                            <div >
                                <label class="control-label col-sm-2" htmlfor="email">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" name="email" placeholder="Enter email" onChange={this.change.bind(this, 'email')} /><br />
                                </div>
                                <span id="email_error">{this.state.form_errors["email_error"]}</span>
                            </div>
                            <div >
                                <label htmlfor="mobile_number" class="col-sm-2 control-label">MobileNumber</label>
                                <div class="col-sm-10">
                                    <input class="form-control" type="tel" name="mobile_number" placeholder="Enter MobileNumber" onChange={this.change.bind(this, 'mobile_number')} /><br />
                                </div>
                                <span id="mobile_number_error">{this.state.form_errors["mobile_number_error"]}</span>
                            </div>
                            <div>
                                <label htmlfor="skills" class="control-label col-sm-2">skills</label>
                                <select multiple class="col-xs-2" name="skills" onChange={this.change.bind(this, 'skills')}>
                                    <option value="javascript">Javascript</option>
                                    <option value="jquery">Jquery</option>
                                    <option value="Angular">Angular</option>
                                </select>
                            </div>
                            <span id="skills_error">{this.state.form_errors["skills_error"]}</span>
                            <br /><br />
                            <div class=" col-xs-10">
                                <button type="reset" class="btn btn-primary">Clear</button>
                                <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>
                                <Link to={{
                                    pathname: '/intdashboard', state: {
                                        skills: this.state.skills,
                                        userid: this.state.id,
                                        username: this.state.name
                                    }
                                }}>My route</Link>
                                </button>
                            </div>
                            </div>
                      </section>

                    )
                }
            }
            
            export default SignupInterviewer;
