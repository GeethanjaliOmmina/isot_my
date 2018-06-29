import React, { Component } from 'react';
import {Router,Route} from 'react-router-dom';
import LandingPage from '../registration/pages/landingPage';
class Logout extends Component {
    render() {
        return (
            <Router>
                <Route exact path={'/landingpage'} component={LandingPage} />
                </Router>

        );
    }
}
export default Logout;