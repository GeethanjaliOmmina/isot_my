import React, { Component } from 'react';
import './location.css';
import NavBar from '../common/navbar';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LocationArray: [],
            newLocationContent: '',
            id:0
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeLocation = this.writeLocation.bind(this);
    }
    handleUserInput(e){
        
        this.setState({
            newLocationContent: e.target.value.toUpperCase(), // the value of the text input
        })
    }
    addLocation(location, id) {
        const locationToBeAdded = {
            location_name: location
        }
        this.setState({
            LocationArray: this.state.LocationArray.concat(locationToBeAdded)
        })


        fetch("https://elixir-islot-project-react.firebaseio.com/location.json", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "location_id": id,
                "location_name": location

            })
        })

    }


    componentDidMount() {
        var self = this;
        fetch("https://elixir-islot-project-react.firebaseio.com/location.json").then(response => response.json())
            .then(function (data) {
                    if(data==null)
                        console.log("nodata");
                    else{
                    var keys = Object.keys(data);
                    let location = [];
                    for(var i=0;i<keys.length;i++)
                    {
                        var k = keys[i];
                        location[i] = data[k];
                    }
                    //console.log(skills);
                    self.setState({
                        LocationArray: location
                    })
                }
            })
    }
    writeLocation(){
        // call a method that sets the LocationContent for a location to
        // the value of the input
        let ids = this.state.id;
        ids+=1;
        this.addLocation(this.state.newLocationContent,ids);

        // Set newLocationContent back to an empty string.
        this.setState({
            newLocationContent: '',
            id:ids
            
        })
    }
    render() {
        return (
                <section style={sectionStyle}>
                <NavBar />
                <div id="con2">
                <div class="text-center">
                    <div class="form-group">
                    <input type="text" class="form-control" id="location" name="myLocation" placeholder="Add a new location" value={this.state.newLocationContent} onChange={this.handleUserInput}/>
                    <button class="btn btn-primary" onClick={this.writeLocation}>Click Me </button>
            </div>
            </div>
         
            <div class="row">
                {this.state.LocationArray.map(function(location){
                 return(   
                <div class="item col-lg-3" id="tile" >
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    <div>{location.location_name}</div>
                    </div>
                )})}
                </div>
                </div>
            </section>
        );
    }
}
export default Location;