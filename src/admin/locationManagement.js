import React, { Component } from 'react';
import './location.css';
import NavBar from '../common/navbar';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/img2.jpg`})`,
};
class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillname: ''
        }
        this.onPresskey = this.onPresskey.bind(this);
    }
    onPresskey(e) {
        if (e.which === 13) {
            var x = document.getElementById("b1");
            if (x.style.display === "none") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
            console.log("enter key is pressed");
        }
        this.setState({
            skillname: e.target.value
        })

        // onButton(){
        //     var elem = document.getElementById("b1");
        //                     elem.parentNode.removeChild(elem);
        // }

    }


    render() {
        return (
                <div>
                <NavBar />
                <div class="text-center">
                    <div class="form-group">
                        <input type="text" class="form-control" id="skill" name="mySkill" ngModel="mySkill" placeholder="Add a new skill" />

                    </div>


                    <div class="row">
                        <div class="item col-lg-3" id="tile" >
                            <button type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                            <span>Chennai</span>

                        </div>
                        <div class="item col-lg-3" id="tile">
                            <button type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                            <span>Hydrebad</span>
                        </div>
                        <div class="item col-lg-3" id="tile">
                            <button type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                            <span>Bangalore</span>
                        </div>
                    </div>


                    <div class="row">
                        <div class="item col-lg-3" id="tile">
                            <button type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                            <span>pune</span>
                        </div>
                        <div class="item col-lg-3" id="tile">
                            <button type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                            <span>Vizag</span>
                        </div>
                        <div class="item col-lg-3" id="tile">
                            <button type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                            <span>Delhi</span>
                        </div>
                    </div>
                </div>
                </div>
        );

    }
}


export default Location;

