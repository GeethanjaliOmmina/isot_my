import React, { Component } from 'react';
// import NavBar from '../common/navbar';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back2.jpg`})`,
};
class Drivereg extends Component {
        constructor(props) {
        super(props);
        this.state = {
            
            isValid:'false',
            eventname : '',
            eventname_error : "false",
            eventSkills : [],
            eventSkills_error : 'false',
            eventLocation : [],
            eventLocation_error : 'false',
            eventReg_details : {
                eventsname : '',
                date:"",
                start_time:"",
                end_time:"",
                eventsLocation:"",
                eventsSkills : ""
            }
        }
        this.change = this.change.bind(this);

    }

        checkEventName(value) {
            if (value != "") {
                return true;
            }
            else {
                return false;
            }
        }
        checkNameContainsNumber(value)
    {
        for(var i=0;i<value.length;i++)
        {
            if(value[i] >= 0 && value[i] <=9)
               return true;
        }
        return false;
    }
    checkSkills(value) {

        if (value.length!=0) {
            document.getElementById("skills_error").innerHTML = "";
            return true;

        }
        else {
            return false;
        }
    }
    eventName_error()
    {
        document.getElementById("eventname_error").innerHTML = "Name is required";
    }
    nameContainsNumber_error()
    {
        document.getElementById("eventname_error").innerHTML = "no number to be used";
    }
    // eventSkills_error()    
    // {
    //     document.getElementById("eventSkills_error").innerHTML ="skills is required";
    // }
    // eventLocation_error()    
    // {
    //     document.getElementById("eventLocation_error").innerHTML ="location is required";
    // }
    
    change(name, e) {
        if(name == "eventSkills" || name == "eventLocation")
        {
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
            }
        }
        //console.log(value);
        }
        else
        {
            var value = e.target.value;
        }
        this.setState(
            {
                [name]: value
            }
        );
        
        this.validate(name, value);
    }  




    validate(name,value)
    {
        if(name == "eventname")
        {
            if(!this.checkEventName(value))
            {
                this.eventName_error();
            }
            else if(this.checkNameContainsNumber(value))
            {
                this.nameContainsNumber_error();
            }
            else
            {
                this.setState({
                    eventReg_details : 
                    {
                      eventsname : value,  
                    },
                    eventname : value,
                    eventname_error : 'true',
                });
            }
          //  console.log(value);
           // console.log(this.state.name);
            //console.log(this.state.interviewer_details.uname);
            
        }
    
    //     else if(name == "eventskills")
    //     {
    //          if(!this.checkSkills(value))
    //          {
    //              this.skills_error();
    //          }
          
    //          else{
    //              this.setState({
    //                 eventReg_details : 
    //                 {
    //                     eventsSkills : value,  
    //                 },
    //                  eventSkills : value,
    //                  eventSkills_error : 'true'
    //              })
    //          }
    //         //  console.log(value);
    //         //  console.log(this.state.eventSkills);
    //      }
    //     else if(name == "eventlocation")
    //     {
    //          if(!this.eventCheckLocation(value))
    //          {
    //              this.eventlocation_error();
    //          }
          
    //          else{
    //              this.setState({
    //                 eventReg_details : 
    //                 {
    //                    eventsLocation : value,  
    //                 },
    //                  eventLocation : value,
    //                  eventLocation_error : 'true'
    //              })
    //          }
    //         //  console.log(value);
    //         //  console.log(this.state.eventLocation);
    //      }
 }

 render() {
    return (
        <section style={sectionStyle}>
        {/* <h3>Drive Registration</h3> */}
        {/* <div className="container7"> */}
        <br/>
        {/* <NavBar/> */}
        <br/>
        <div className="container7">
        <h3>Drive Registration</h3>
         <div >
                    <label class="control-label col-sm-2" htmlfor="dname">Name</label>
                    {/* <label class="control-label col-sm-2" htmlfor="uname">Username</label> */}
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="dname" name="eventname"placeholder="Enter Drivename" onChange={this.change.bind(this, 'eventname')} /><br/>
                    </div>
                    { this.state.eventName_error && <span id="eventname_error"></span> }
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
                    <label htmlfor="skills" class="control-label col-sm-2" id="slab" name="eventSkills">Skills</label>
                    <select multiple class="col-xs-2" name ="eventSkills" onChange = {this.change.bind(this,'eventSkills')}>
                        <option value = "javascript">Javascript</option>
                        <option value = "jquery">Jquery</option>
                        <option value = "Angular">Angular</option>
                    </select>
                    </div>
                    { this.state.eventSkills_error && <span id="eventSkills_error"></span> }              
                    <div>
                    <label htmlfor="location" class="control-label col-sm-2" id="llab" name="eventLocation">Location</label>
                    <select multiple class="col-xs-2" name ="eventlocation" onChange = {this.change.bind(this,'eventLocation')}>
                        <option value = "Chennai">Chennai</option>
                        <option value = "Hyderabad">Hyderabad</option>
                        <option value = "Pune">Pune</option>
                    </select></div>
                    { this.state.eventLocation_error && <span id="eventLocation_error"></span> }              
                    
                    
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