import React, { Component } from 'react';
import './intDashboard.css'
import NavBar from '../common/navbar';
import {Link} from 'react-router-dom';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class InterviewerDashboard extends Component {
    render() {
        return (
            <section style={sectionStyle}>
             
             <br/><NavBar/>
             <br/>
            <div class="container">
                {/* <NavBar/> */}
                <p>Recent Events</p>
                <div class="eventdiv">
                
                    <div class="eventdivdemo">
                        <div class="event1">

                        </div>
                        <p>Angular walkin</p>
                    </div>
                </div>
                <div class="scorediv">
                
                </div>
                <p>Upcoming Events</p>
                <div class="eventdiv">
                
                    <div class="eventdivdemo">
                    <Link to={'/eventenroll'}><div class="event1">

                        </div></Link>
                        <p>Java walkin</p>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default InterviewerDashboard;