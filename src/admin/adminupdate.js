import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Tabs from '../common/tabs';
import './adminview.css';
import './adminupdate.css';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class AdminUpdate extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <NavBar />
                <Tabs />
                <div class="boxupdate">
                    <div class="boxelements">
                        <h6>Pavan</h6>
                        <div class="numberbox">
                            <p>2</p>
                        </div>
                        <button class="btn btn-primary">Approve</button>
                    </div>
                    <div class="boxelements">
                        <h6>mani</h6>
                        <div class="numberbox">
                            <p>5</p>
                        </div>
                        <button class="btn btn-primary">Approve</button>
                    </div>
                    <div class="boxelements">
                        <h6>dinesh</h6>
                        <div class="numberbox">
                            <p>7</p>
                        </div>
                        <button class="btn btn-primary demo">Approve</button>
                    </div>
                    <div class="btnevent"><button class="btn btn-primary">Close Event</button></div>
                </div>
        </section>
        );
    }
}

export default AdminUpdate;