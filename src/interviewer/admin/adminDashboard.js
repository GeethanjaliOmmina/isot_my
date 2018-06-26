import React, { Component } from 'react';
import './adminDashboard.css'
import NavBar from '../common/navbar';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/img2.jpg`})`,
};
class AdminDashboard extends Component {
    render() {
        return (
            <section style={sectionStyle}>
            <div class="container">
                <NavBar/>
                <div class="eventdiv">
                    <div class="eventdivdemo">
                        <div class="event1">

                        </div>
                        <p>Angular walkin</p>
                    </div>
                    <div class="eventdivdemo">
                        <div class="event1">

                        </div>
                        <p>Java walkin</p>
                    </div>
                </div>
                <div class="buttondiv">
                <button class="createeventbutton"><p class="demopara">+</p></button>
                </div>
            </div>
            </section>
        );
    }
}

export default AdminDashboard;