import React, { Component } from 'react';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/img2.jpg`})`,
};
class Drivereg extends Component {
    render() {
        return (
            <section style={sectionStyle}>
            <div id="con">
            <h3>Drive Registration</h3>
            <form>
                <div align="center">
                    Name :
                    <input type="text" name="dname" />
                    <br />
                    <br/> Date :
                    <input type="date" name="ddate" />
                    <br />
                    <br/Start Time :
                    <input type="time" name="stime" />
                    <br/>
                    <br/> End Time :
                    <input type="time" name="etime" />
                    <br />
                    <br/> Location :
                    <select id="location">
                        <option value="1">chennai</option>
                        <option value="2">hyderabad</option>
                        <option value="3">banglore</option>
                    </select>
                    Skills :
                    <select id="skills" multiple>
                        <option value="1">Javascript</option>
                        <option value="2">JQuery</option>
                    </select><br/><br/>
                    <input type="reset" value="Reset" />
                    <input type="submit" value="Create Event" />
                </div>
            </form>
            </div>
            </section>
        );
    }
}

export default Drivereg;               