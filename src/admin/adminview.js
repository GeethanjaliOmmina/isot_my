import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Tabs from '../common/tabs';
import './adminview.css';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class AdminView extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <NavBar/>
                <Tabs />
                <div class="box">
                    <div class="innerbox">
                    </div>
                </div>
                <div class="box">
                    <div class="innerbox">
                    </div>
                </div>
                <div class="box">
                    <div class="innerbox">
                    </div>
                </div>
                <div class="box">
                    <div class="innerbox">
                    </div>
                </div>
            </section>
        );
    }
}

export default AdminView;