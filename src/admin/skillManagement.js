import React, { Component } from 'react';
import './skills.css';
import NavBar from '../common/navbar';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
let datas = [];
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
        skillsArray: [],
        newSkillContent: '',
        id:0,
        dat: []
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeSkill = this.writeSkill.bind(this);
        this.deleteSkill = this.deleteSkill.bind(this);
        }
        handleUserInput(e){
        
        this.setState({
        newSkillContent: e.target.value.toUpperCase(), // the value of the text input
        })
        }
        addSkill(skill, id) {
        const skillToBeAdded = {
        skill_name: skill
        }
        this.setState({
        skillsArray: this.state.skillsArray.concat(skillToBeAdded)
        })
       
       
        fetch("https://elixir-islot-project-react.firebaseio.com/skills.json", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "skill_id": id,
        "skill_name": skill
       
        })
        })
       
        }
       
       
        componentDidMount() {
        var self = this;
        fetch("https://elixir-islot-project-react.firebaseio.com/skills.json").then(response => response.json())
        .then(function (data) {
        if(data==null)
        console.log("nodata");
        else{
        var keys = Object.keys(data);
        let skills = [];
        for(var i=0;i<keys.length;i++)
        {
        var k = keys[i];
        skills[i] = data[k];
        }
        console.log(self.state.keys);
       
        console.log(data[keys[0]].skill_id);
        Object.assign(datas,data);
        console.log(skills);
        self.setState({
        skillsArray: skills,
        dat:data
        })
        }
        })
        }
        writeSkill(){
        // call a method that sets the LocationContent for a location to
        // the value of the input
        let ids = this.state.id;
        this.addSkill(this.state.newSkillContent,ids);
        ids+=1;
        console.log("datas " + datas)
       
        // Set newLocationContent back to an empty string.
        this.setState({
        newSkillContent: '',
        id:ids
        
        })
        }
        deleteSkill(id) {
        console.log(id);
        //console.log(this.state.key);
        //console.log(this.state.key);
        //var x = this.state.key[id];
        //console.log(x);
        fetch(`https://elixir-islot-project-react.firebaseio.com/skills/${id}.json`, {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        })
        }
    render() {
        var self = this;
        return (
            <section style={sectionStyle}>
            <NavBar />
            <br/>
            <div id="con2">
          {/* <NavBar /> */}
            <div class="text-center">
                  <div class="form-group">
                    <input type="text" class="form-control" id="skill" name="mySkill" placeholder="Add a new skill" value={this.state.newSkillContent} onChange={this.handleUserInput}/>
                    <button class="btn btn-primary" onClick={this.writeSkill}>Click Me </button>
            </div>
            </div>
         
            <div class="row">
                {this.state.skillsArray.map(function(skills){
                 return(   
                <div class="item col-lg-3" id="${skills.skill_name}" onClick = {self.deleteSkill.bind(this)} >
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-trash"  ></span>
                    </button>
                    <div>{skills.skill_name}</div>
                    </div>
                )})}
                </div>
                </div>
            </section>
      );
    }
}
export default Skills;