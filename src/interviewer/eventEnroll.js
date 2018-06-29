import React, { Component } from 'react';
import './eventenroll.css';
var sectionStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${`./images/back1.jpg`})`,
};
class InterviewerEventEnroll extends Component {
    constructor(props) {
        super(props);
        this.state = {

            slots: [
                {
                    endTime: "10:00am",
                    id: "1",
                    noOfInterviewsEnrolled: [
                        {
                            noOfInterviewsTaken: "10",
                            userid: "2"
                        }
                    ],
                    startTime: "6:00am"
                }

            ],

        }
        this.toogle = this.toogle.bind(this);

        this.update = this.update.bind(this);
    }

    toogle(id) {

        var self = this;

        // console.log(id)
        // var d = this.state.slots[id].noOfInterviewsEnrolled[0].noOfInterviewsTaken;
        // console.log(d);

        // this.setState({
        // noOfInterviewsEnrolled:
        // });

        var key = this.props.location.state.key;
        var uid = this.props.location.state.userid;
        var username = this.props.location.state.username;
        console.log("username" + username);

        var changedData
        console.log(key);

        fetch("https://perl-react-project.firebaseio.com/event/" + key + ".json").then(res => res.json())
            .then(function (data) {

                //console.log(data)

                var index = -1;
                var count = 0;

                console.log(data.slots[id]);

                var s = data.slots[id].noOfInterviewsEnrolled;

                for (var i = 0; i < s.length; i++) {
                    if (s[i].id == uid)
                        index = i;
                }
                var d;

                console.log(index);
                console.log("id " + uid)
                if (index == -1) {
                    data.slots[id].noOfInterviewsEnrolled.push({
                        id: uid,
                        username: username,
                        noOfInterviewsTaken: 0
                    })
                }
                else {
                    d = data.slots[id].noOfInterviewsEnrolled[index].noOfInterviewsTaken += 1;

                }






                fetch("https://perl-react-project.firebaseio.com/event/" + key + ".json", {
                    method: 'GET',

                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {


                    return res;
                }).catch(err => err);

            })






        // console.log(dt);


    }
    update() {

    }
    componentDidMount() {

        var self = this;
        console.log(this.props);


        var data = this.props.location.state.slotData;
        var key = this.props.location.state.key;
        console.log(key)


        fetch("https://perl-react-project.firebaseio.com/event/" + key + ".json").then(res => res.json())
            .then(function (data) {
                self.setState({
                    slots: data.slots
                });
            })
        // console.log(data)
        // console.log(data[0].endTime);
        // console.log(data[0].noOfInterviewsEnrolled[0].noOfInterviewsTaken)
        // console.log(this.state.slots[0].noOfInterviewsEnrolled[0].noOfInterviewsTaken)
        // this.setState({
        // slots: [
        // {
        // endTime: data[0].endTime,
        // startTime: data[0].startTime,
        // id: data[0].id,
        // noOfInterviewsEnrolled: [
        // {
        // noOfInterviewsTaken: "9",
        // userid: "1"
        // }
        // ],
        // },
        // {
        // endTime: data[0].endTime,
        // startTime: data[0].startTime,
        // id: data[0].id,
        // noOfInterviewsEnrolled: [
        // {
        // noOfInterviewsTaken: "10",
        // userid: "1"
        // }
        // ],
        // }]
        // });
    }
    render() {
        let my = this;
        let count = -1;
        return (

                <section style={sectionStyle}>
                  <br />
                  {my.state.slots.map(function (data,i) {
                <div className="main-container" id="main-con">
                <h1>Event Enrollment</h1>                
                return (
                    <div id="slot1" >
                        <div class="col-lg-3">
                            <h3> {data.startTime} - {data.endTime}</h3>
                        </div>
                        <div class="col-lg-3">
                        <p id="IE_count">{data.noOfInterviewsEnrolled.length}</p>
                        </div>
                        <div class="col-lg-3" id="toggleid">
                            <label class="switch">    
                                <input type="checkbox" onClick={my.toogle.bind(this,i)} />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="col-lg-3" id="tit" >
                            <label for="totalInterviews"> Total Interviews Taken </label>
                            <input type="text" class="form-control" name="totalInterviews" onChange={my.call} />
                        </div>
                    </div>
                    
                    <br />
                    )
                    </div>
                    })
                    } 
                    <button id="IE_upd" type="button" class="btn btn-lg btn-success" onClick={my.update}>
                    Update
                </button>
            </section>
        );
    }
}
export default InterviewerEventEnroll;
