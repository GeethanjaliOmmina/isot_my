import React, { Component } from 'react';
import './intDashboard.css'
import NavBar1 from '../common/navbar1';
import {Link} from 'react-router-dom';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class InterviewerDashboard extends Component {
    constructor() {
        super();
        this.state = {
        userid :"",
        username:"",
        recentEventArray: [
        {
        startTime:"9:00am",
        endTime: "2.00pm",
        key:"",
        eventDate: "06/20/2018",
        eventName: "Angular walk-in",
        id: "01",
        isClosed: "false",
        location: "hyderabad",
        skill: "Angular",
        slots: [
        {
        endTime: "10.00am",
        id: "11",
        noOfInterviewsEnrolled: [
        {
        noOfInterviewsTaken: "15",
        userid: "1"
        }
        ],
        startTime: "9.00am"
        }
       
        ]
        }
        ],
        upcomingEventArray : [
        {
        startTime:"10:00am",
        endTime: "2.00pm",
        key:"",
        eventDate: "06/20/2018",
        eventName: "Angular walk-in",
        id: "01",
        isClosed: "false",
        location: "hyderabad",
        skill: "Angular",
        slots: [ 
        {
        endTime: "10.00am",
        id: "11",
        noOfInterviewsEnrolled: [
        {
        noOfInterviewsTaken: "15",
        userid: "1"
        }
        ],
        startTime: "9.00am"
        }
       
        ]
        }
        ]
        }
        this.matchSkillName = this.matchSkillName.bind(this);
        }
        signOut() {
        // fire.auth().signOut();
        // console.log(this.state.recevent);
        }
        matchSkillName(skills,name)
        {
        //alert(name + skills[0]);
        var skillArr = name.toLowerCase().split(" ");
        console.log(skills[0]==skillArr[0]);
        for(var i=0;i<skills.length;i++)
        {
        if(skills[i]==skillArr[0])
        return true;
        }
        return false;
        }
        componentDidMount() {
       
        console.log(this.props);
        var skills = this.props.location.state.skills;
        var userid = this.props.location.state.userid;
        var username = this.props.location.state.username;
       
        this.setState({
        userid:userid
        })
        // console.log(skills)
        const self = this;
        var recevent = {};
        var upevent = {};
        var i1 = 0, i2 = 0;
        var event = {};
        fetch("https://perl-react-project.firebaseio.com/event.json").then(res => res.json())
        .then(function (data) {
        /// console.log(data);
        var keys = Object.keys(data);
        // console.log(keys);
        for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var date = data[k].eventDate;
        var d1 = date.split('/');
        var gm = d1[0];
        var gd = d1[1];
        var gy = d1[2];
       
        var d = new Date().toLocaleString();
        d1 = d.split('/');
        var cm = d1[0];
        var cd = d1[1];
        var cy = d1[2];
        // console.log(cd);
       
        
        // if ((Math.abs(cm - gm) == 0 && ((cd -gd) <= 0)||((cd-gd) > -5))){
        //recent events 
        if(self.matchSkillName(skills,data[k].eventName))
        {
        if(Math.abs(cm-gm)==0 && (gd-cd<-7 || gd-cd <=0))
        {
       
        recevent[i1] = data[k];
        i1++;
        console.log("recent");
        }
        else 
        {
        //upcoming events
        upevent[i2] = data[k];
        i2++;
        console.log("upcoming");
       
        }
        }
       
        }
        console.log(Object.keys(recevent).length);
        console.log(Object.keys(upevent).length);
        //console.log(recevent.size);
        var keyData = Object.keys(data);
        
        
        for (var x = 0; x < Object.keys(recevent).length; x++) {
        const recEventObj = {
        id: x,
        startTime: recevent[x].startTime,
        endTime: recevent[x].endTime,
        key:keyData[x],
        eventDate: recevent[x].eventDate,
        eventName: recevent[x].eventName,
        isClosed: recevent[x].isClosed,
        location: recevent[x].location,
        skill: recevent[x].skill,
        slots: [
        {
        endTime: recevent[x].endTime,
        id: x,
        noOfInterviewsEnrolled: [
        {
        noOfInterviewsTaken: recevent[x].noOfInterviewsEnrolled,
        userid: recevent[x].userid
        }
        ],
        startTime: recevent[x].startTime
       
        
        }]
        }
        const joined = self.state.recentEventArray.concat(recEventObj);
       
        self.setState({
        recentEventArray: (joined)
        });
       
        }
        var keyData = Object.keys(data);
        console.log("key" + keyData[0]);
        for (var x = 0; x < Object.keys(upevent).length; x++) {
        
        const upEventObj = {
        id: x,
        startTime: upevent[x].startTime, 
        endTime: upevent[x].endTime,
        key:keyData[x],
        eventDate: upevent[x].eventDate,
        eventName: upevent[x].eventName,
        isClosed: upevent[x].isClosed,
        location: upevent[x].location,
        skill: upevent[x].skill,
        slots: [
        {
        endTime: upevent[x].endTime,
        id: x,
        noOfInterviewsEnrolled: [
        {
        noOfInterviewsTaken: upevent[x].noOfInterviewsEnrolled,
        userid: upevent[x].userid
        }
        ],
        startTime: upevent[x].startTime
       
        
        }]
        }
        const joined = self.state.upcomingEventArray.concat(upEventObj);
        console.log(joined);
       
        self.setState({
        upcomingEventArray: (joined)
        });
       
        }
        //console.log(self.state.recentEventArray);
        // this.check(recevent);
        }
        )
       
       
       
       
       
        //console.log(this.state.recentEventArray);
        }
        check(recent) {
        //console.log(recent);
        }
       
       
       
       
       
       
       
        render() {
            let self = this;
        return (
            <section style={sectionStyle}>
            <NavBar1/>
        <div class="container">
        
        <p>Recent Events</p>
        <div class="row">
        {self.state.recentEventArray.map(function (data) {
        return(
        <div class="col-lg-3 eventdiv">
        
        <div class="eventdivdemo">
        <div class="event1">
       
        </div>
        <p>{data.eventName}</p>
        <Link to={{ pathname: '/eventenroll', state: { 
        key:data.key,
        slotData:data.slots,
        userid:self.state.userid,
      //  username:self.state.username
        
        } }}>click</Link> 
        </div>
        </div>)
        } )}
        <div class="scorediv">
        
        </div>
        </div>
        
        <p>Upcoming Events</p>
        <div class="row">
        {self.state.upcomingEventArray.map(function (data) {
        return(
        <div class=" col-lg-3 eventdiv"> 
        <div class="eventdivdemo">
        
       
        </div>
        <p>{data.eventName}</p>
        <Link to={{ pathname: '/eventenroll', state: { 
        key:data.key,
        slotData:data.slots,
        userid:self.state.userid,
       // username:self.props.location.state.username
        
        
        } }}>Click</Link> 
        </div>
        )
        })}
        </div>
        </div>
        </section>
        );
        }
       }
       
       export default InterviewerDashboard;
   