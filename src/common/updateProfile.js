import React, { Component } from 'react';
import "./updateProfile.css";
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back7.jpg`})`,
};
class UpdateProfile extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                {/* <h3>Update Profile</h3><br /><br /> */}
                <div className="container7">
                <h3>Update Profile</h3><br /><br />
                    <div >
                        <label class="control-label col-sm-2" htmlfor="uname">Username</label>
                        {/* <label class="control-label col-sm-2" htmlfor="uname">Username</label> */}
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="uname" placeholder="username" /><br />
                        </div>
                    </div>
                    <div >
                        <label class="control-label col-sm-2" htmlfor="pwd">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="pwd" placeholder="change password" /><br />
                        </div>
                    </div>
                    <div >
                        <label class="control-label col-sm-2" htmlfor="email">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" placeholder="change email" /><br />
                        </div>
                    </div>
                    <div  >
                        <label htmlfor="mobilenumber" class="col-sm-2 control-label">MobileNumber</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="tel" id="mobile_number" placeholder="change MobileNumber" /><br />
                        </div>
                    </div>
                    <div class=" col-xs-10">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </section>

        );
    }
}
export default UpdateProfile;