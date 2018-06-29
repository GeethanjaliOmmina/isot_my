import React, { Component } from 'react';
import './adminDashboard.css'
import NavBar from '../common/navbar';
import {Link} from 'react-router-dom';
var sectionStyle={
    width:"100%",
    height:"1000px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class AdminDashboard extends Component {
    constructor() {
        super();
        this.state = {
        adminId:"",
        recentEventArray: [
        {
        endTime: "2.00pm",
        eventDate: "06/20/2018",
        eventName: "Angular walk-in",
        id: "01",
        key:"",
        adminId:"",
        isClosed: "false",
        location: "hyderabad",
        skill: "Angular",
        startTime: "9.00am",
        slots: [
        {
        endTime: "10.00am",
        
        noOfInterviewsEnrolled: [
        {
        noOfInterviewsTaken: "15",
        id: "1",
        username:"mani"
        }
        ],
        startTime: "9.00am"
        }
       
        ]
        }
        ],
        upcomingEventArray : [
        {
        endTime: "2.00pm",
        eventDate: "06/20/2018",
        eventName: "Angular walk-in",
        id: "01",
        key:"",
        adminId:"",
        isClosed: "false",
        location: "hyderabad",
        skill: "Angular",
        startTime : "12.00pm",
        slots: [ 
        {
        endTime: "10.00am",
        
        noOfInterviewsEnrolled: [
        {
        noOfInterviewsTaken: "15",
        id: "1",
        username:"kumar"
        }
        ],
       
        startTime: "9.00am"
        }
       
        ]
        }
        ]
        }
        }
        signOut() {
        // fire.auth().signOut();
        // console.log(this.state.recevent);
        }
        componentDidMount() {
       
        console.log(this.props);
        var adminId = this.props.location.state.userid;
        this.setState({
        adminId:adminId
        });
        const self = this;
        var recevent = {};
        var upevent = {};
        var i1 = 0, i2 = 0;
        var event = {};
        fetch("https://perl-react-project.firebaseio.com/event.json").then(res => res.json())
        .then(function (data) {
        /// console.log(data);
        var keys = Object.keys(data);
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
        console.log("ids " + data.adminId + " " + self.state.adminId)
       
        
        //recent events 
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
        console.log(Object.keys(recevent).length);
        console.log(Object.keys(upevent).length);
        //console.log(recevent.size);
        var keyData = Object.keys(data);
        
        for (var x = 0; x < Object.keys(recevent).length; x++) {
        const recEventObj = {
        id: x,
        key:keyData[x],
        startTime: recevent[x].startTime,
        endTime: recevent[x].endTime,
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
        id: recevent[x].id
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
       
        console.log(keyData)
        
        for (var x = 0; x < Object.keys(upevent).length; x++) {
        const upEventObj = {
        id: x,
        key:keyData[x], 
        startTime: upevent[x].startTime, 
        endTime: upevent[x].endTime,
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
        id: upevent[x].id
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
       
        render() {
        let self = this;
        return (
            <section style={sectionStyle}>
        <div class="container">
        <NavBar/>
        <p>Recent Events</p>
        <div class="row">
        {this.state.recentEventArray.map(function (data) {
        return(
        <div class="col-lg-3 eventdiv">
        
        <div class="eventdivdemo">
        <div class="event1">
       
        </div>
        <p>{data.eventName}</p>
        <Link to={{ pathname: '/view', state: { 
        key:data.key,
        // key:"-LG-qV3AWXOgl672h5Q2",
        slotData:data.slots,
        userid:self.state.userid,
        username:self.props.location.state.username     
        } }}>click me</Link> 
        </div>
        </div>)
        } )}
        </div>
        <div class="buttondiv">
        <Link to={'/driveregister'}><button class="createeventbutton"><span class="glyphicon glyphicon-plus" /></button></Link>
        </div> 
        <p>Upcoming Events</p>
        <div class="row">
        {this.state.upcomingEventArray.map(function (data) {
        return(
        <div class=" col-lg-3 eventdiv"> 
        <div class="eventdivdemo">
        <div class="event1">
        
        </div>
        <p>{data.eventName}</p> 
        <Link to={{ pathname: '/view', state: { 
        key:data.key,
        // key:"-LG-qV3AWXOgl672h5Q2",
        slotData:data.slots,
        userid:self.state.userid,
        username:self.props.location.state.username
        
        
        } }}>click me</Link> 
       
        </div>
        
        </div>
        )
        })}
        </div>
        </div>
        </section>
        );
        }
       }
       
       export default AdminDashboard;