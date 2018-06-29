import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class NavBar1 extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">iSlot</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li>
                                <Link to={'/intdashboard'}>Dashboard</Link>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            {/* <li>
                                <Link to={'/chart'}>
                                    <span class="glyphicon glyphicon-stats"></span> Stats</Link>
                            </li> */}
                            <li>
                                <a class="dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-option-vertical"></span></a>
                                <ul class="dropdown-menu">
                                    <li><Link to={'/updateprofile'} >Update Profile</Link></li>
                                    {/* <li><Link to={'/skills'} >Skills Management</Link></li> */}
                                    {/* <li><Link to={'/location'} >Location Management</Link></li> */}
                                    <li><Link to={'/logout'} >Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar1;