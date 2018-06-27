import React, { Component } from 'react';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/iimag9.jpg`})`,
};
class Drivereg extends Component {
    render() {
        return (
            <section style={sectionStyle}>
            {/* <h3>Drive Registration</h3> */}
            <div className="container7">
            <h3>Drive Registration</h3>
                  <div >
                    <label class="control-label col-sm-2" htmlfor="dname">Name</label>
                    {/* <label class="control-label col-sm-2" htmlfor="uname">Username</label> */}
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="dname" placeholder="Enter Drivename" /><br/>
                    </div>
                    </div>          
                    <div >
                    <label class="control-label col-sm-2" htmlfor="date">Date</label>
                    <div class="col-sm-10">
                        <input type="Date" class="form-control" id="ddate" placeholder="Enter DriveDate" /><br/>
                    </div>
                    </div>
                     <div >
                    <label class="control-label col-sm-2" htmlfor="stime">Start Time</label>
                    <div class="col-sm-10">
                        <input type="time" class="form-control" id="stime" placeholder="Enter Start Time" /><br/>
                    </div>
                     </div>
                     <div >
                    <label class="control-label col-sm-2" htmlfor="etime">End Time</label>
                    <div class="col-sm-10">
                        <input type="time" class="form-control" id="etime" placeholder="Enter End Time" /><br/>
                    </div>
                     </div>
                    <div>
                    <label htmlfor="skills" class="control-label col-sm-2" id="slab">Skills</label>
                    <select multiple class="col-xs-2" id="skills">
                        <option>Javascript</option>
                        <option>jquery</option>
                    </select>
                    </div>
                    <div>
                    <label htmlfor="location" class="control-label col-sm-2" id="llab">Location</label>
                    <select multiple class="col-xs-2" id="location">
                        <option>hyderabad</option>
                        <option>chennai</option>
                    </select>
                    </div>
                    
                    <div class=" col-xs-10">
                        <button type="reset" class="btn btn-primary" id="but">Clear</button>
                        <button type="submit" class="btn btn-primary">Create Event</button>
                    </div>
                    </div> 
                    </section>
            );
    }
}

export default Drivereg;               