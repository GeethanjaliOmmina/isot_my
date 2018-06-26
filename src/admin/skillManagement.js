import React, { Component } from 'react';
import './skills.css';
import NavBar from '../common/navbar';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/img2.jpg`})`,
};
class Skills extends Component {
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
            //     <div>
            //         <br />
            //     <div className="main-containers" id="main-con">
            //     <h1>SKILLS MANAGEMENT</h1>
            //     <input type ="text"  className="input" placeholder="Add a new skill....." onKeyDown={this.onPresskey}  />
            //    <div className="boxes" id="b1"><sup><img src="images/download.png" /></sup><br />{this.state.skillname}
            //    </div>
            //    </div>
            //    </div>
            <div>
          <NavBar />
            <div class="text-center">
                <div class="form-group">
                    <input type="text" class="form-control" id="skill" name="mySkill"  ngModel="mySkill" placeholder="Add a new skill"/>
     
            </div>
            

            <div class="row">
                <div class="item col-lg-3" id="tile" >
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    <span>Java</span>

                </div>
                <div class="item col-lg-3" id="tile">
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    <span>.net</span>
                </div>
                <div class="item col-lg-3" id="tile">
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    <span>Angular</span>
                </div>
            </div>


            <div class="row">
                <div class="item col-lg-3" id="tile">
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    <span>Java Script</span>
                </div>
                <div class="item col-lg-3" id="tile">
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    <span>Testing</span>
                </div>
                <div class="item col-lg-3" id="tile">
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    <span>Informatica</span>
                </div>
            </div>
  </div >
       </div> 
  
    );

    }
}


export default Skills;