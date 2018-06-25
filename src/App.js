import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../src/registration/pages/login';
import SignupAdmin from '../src/registration/pages/signupAdmin';
import SignupInterviewer from '../src/registration/pages/signupInterviewer';
import LandingPage from '../src/registration/pages/landingPage';
import AdminDashboard from '../src/admin/adminDashboard';
import AdminViewAndUpdate from '../src/admin/adminviewandupdate';
import AdminView from '../src/admin/adminview';
import AdminUpdate from '../src/admin/adminupdate';
import DriveReg from '../src/admin/driveReg';
import Chart from '../src/admin/chart';
import InterviewerDashboard from '../src/interviewer/intDashboard';
import InterviewerEventEnroll from '../src/interviewer/eventEnroll';
import UpdateProfile from '../src/common/intUpdateProfile';
import Skills from '../src/admin/skillManagement';
import Location from '../src/admin/locationManagement';
import './registration/pages/landingPage.css';
class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/adminregister'} component={SignupAdmin} />
            <Route exact path={'/interviewerregister'} component={SignupInterviewer} />
            <Route exact path={'/admindashboard'} component={AdminDashboard} />
            <Route exact path={'/view'} component={AdminView} />
            <Route exact path={'/update'} component={AdminUpdate} />
            <Route exact path={'/driveregister'} component={DriveReg} />
            <Route exact path={'/chart'} component={Chart} />
            <Route exact path={'/eventenroll'} component={InterviewerEventEnroll} />
            <Route exact path={'/intdashboard'} component={InterviewerDashboard} />
            <Route exact path={'/updateprofile'} component={UpdateProfile} />
            <Route exact path={'/skills'} component={Skills} />
            <Route exact path={'/location'} component={Location} />
          </Switch>
          </Router>
    );
  }
}

export default App;
