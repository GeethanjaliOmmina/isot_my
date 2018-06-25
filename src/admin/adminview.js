import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Tabs from '../common/tabs';
import './adminview.css';
class AdminView extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default AdminView;