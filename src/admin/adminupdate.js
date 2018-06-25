import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Tabs from '../common/tabs';
import './adminview.css';
import './adminupdate.css';
class AdminUpdate extends Component {
    render() {
        return (
            <div>
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
                        <h6>Pavan</h6>
                        <div class="numberbox">
                            <p>2</p>
                        </div>
                        <button class="btn btn-primary">Approve</button>
                    </div>
                    <div class="boxelements">
                        <h6>Pavan</h6>
                        <div class="numberbox">
                            <p>2</p>
                        </div>
                        <button class="btn btn-primary demo">Approve</button>
                    </div>
                    <div class="btnevent"><button class="btn btn-primary">Close Event</button></div>
                </div>
            </div>
        );
    }
}

export default AdminUpdate;