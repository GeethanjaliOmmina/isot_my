import React, { Component } from 'react';

class NavBar extends Component {
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
                                <a href="#">Dashboard</a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a>
                                    <span class="glyphicon glyphicon-stats"></span> Stats</a>
                            </li>
                            <li>
                                <a class="dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-option-vertical"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Change Password</a></li>
                                    <li><a href="#">Update Profile</a></li>
                                    <li><a href="#">Skills Management</a></li>
                                    <li><a href="#">Location Management</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;