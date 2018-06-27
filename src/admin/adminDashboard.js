import React, { Component } from 'react';
import './adminDashboard.css'
import NavBar from '../common/navbar';
import {Link} from 'react-router-dom';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class AdminDashboard extends Component {
    render() {
        return (
            <section style={sectionStyle}>
            <div class="container">
                <NavBar/>
                <p>Recent Events</p>
                <div class="eventdiv">
                
                    <div class="eventdivdemo">
                        <Link to={'/view'}><div class="event1">

                        </div></Link>
                        <p>Angular walkin</p>
                    </div>
                </div>
                <div class="buttondiv">
                <Link to={'/driveregister'}><button class="createeventbutton"><span class="glyphicon glyphicon-plus" /></button></Link>
                </div>
                <p>Upcoming Events</p>
                <div class="eventdiv">
                
                    <div class="eventdivdemo">
                        <div class="event1">

                        </div>
                        <p>Java walkin</p>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default AdminDashboard;