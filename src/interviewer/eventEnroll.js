import React, { Component } from 'react';
//import './eventenroll.css';


class InterviewerEventEnroll extends Component {
    render() {
        return (
            <div>
                <br />
                <div className="main-container" id="main-con">
                    <h1>Event Enrollment</h1>
                    <div id="slot1" >
                        <div class="col-lg-3">
                            <h3> 9AM - 11AM</h3>
                        </div>
                        <div class="col-lg-3">
                        <input type="text" class="form-control" id="box" />
                        </div>
                        <div class="col-lg-3" id="toggleid">
                            <label class="switch">    
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="col-lg-3" id="tit" >
                            <label for="totalInterviews"> Total Interviews Taken </label>
                            <input type="text" class="form-control" name="totalInterviews" />
                        </div>
                    </div>
                    <br />
                    <div id="slot2" >
                        <div class="col-lg-3">
                        <h3> 11AM - 1PM</h3>
                        </div>
                        <div class="col-lg-3">
                        <input type="text" class="form-control" id="box" />
                        </div>
                        <div class="col-lg-3" id="toggleid">
                            <label class="switch">    
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="col-lg-3" id="tit" >
                            <label for="totalInterviews"> Total Interviews Taken </label>
                            <input type="text" class="form-control" name="totalInterviews" />
                        </div>
                    </div>
                    <br />
                    <div id="slot3" >
                        <div class="col-lg-3">
                            <h3> 2PM - 4PM</h3>
                        </div>
                        <div class="col-lg-3">
                        <input type="text" class="form-control" id="box" />
                        </div>
                        <div class="col-lg-3" id="toggleid">
                            <label class="switch">    
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="col-lg-3" id="tit" >
                            <label for="totalInterviews"> Total Interviews Taken </label>
                            <input type="text" class="form-control" name="totalInterviews" />
                        </div>
                    </div>
                    <br />
                    <div id="slot4" >
                        <div class="col-lg-3">
                            <h3> 4PM - 6PM</h3>
                        </div>
                        <div class="col-lg-3">
                        <input type="text" class="form-control" id="box" />
                        </div>
                        <div class="col-lg-3" id="toggleid">
                            <label class="switch">    
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="col-lg-3" id="tit" >
                            <label for="totalInterviews"> Total Interviews Taken </label>
                            <input type="text" class="form-control" name="totalInterviews" />
                        </div>
                    </div>

                    <br />

                    <button type="button" className="btn btn-primary" id="update" >Update</button>

                </div>
            </div>
        );
    }
}

export default InterviewerEventEnroll