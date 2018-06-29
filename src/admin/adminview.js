import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Tabs from '../common/tabs';
import './adminview.css';
var sectionStyle={
    width:"100%",
    height:"1000px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class AdminView extends Component {
    constructor()
    {
      super();
      this.state = {
        slots:[
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
        ]
      }
      this.points = this.points.bind(this);
    }
    points(user)
    {
     
       var key = this.props.location.state.key;
        console.log(user);
  
      fetch("https://perl-react-project.firebaseio.com/user.json").then(res =>res.json())
      .then(function(data)
      {
      
            var keys = Object.keys(data);
            for(var i=0;i<keys.length;i++)
            {
              var k = keys[i];
             
              const someid = data[k].id;
              
             
                if(someid==user)
                {
                data =  data[k].points + 10;
  
                fetch("https://perl-react-project.firebaseio.com/user/"+ keys[i]+".json", {
                  method: 'PUT',
          
                  body: JSON.stringify(data),
                  headers: {
                      'Content-Type': 'application/json'
                  }
              }).then(res => {
                
                 
                  return res;
              }).catch(err => err);
      
                }
  
  
            }
          
          
          
      })
    }
  
      componentDidMount()
      {
        var self  = this;
        var key = this.props.location.state.key;
        console.log(key);
        fetch("https://perl-react-project.firebaseio.com/event/"+key+".json").then(res => res.json())
        .then(function(data)
      {
        console.log(data);
         self.setState({
           slots:data.slots
         });
  
      })
  
      }
    render() {
        let self = this;
        return (
            <section style={sectionStyle}>
            <NavBar/>                <Tabs />
       
                         {self.state.slots.map(function(data)
                {
                  return(
                <div class="box">{data.startTime} - {data.endTime}
                    <div class="innerbox">
                    {data.noOfInterviewsEnrolled.map(function(d)
                    {                  
                    return (
                        <span>{d.username}</span>
                    )
                })}
                
                    </div>
                </div>
                  )
                })}
            </section>
    
        );
    }
}

export default AdminView;