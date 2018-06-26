import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AdminView from '../admin/adminview';
class Tabs extends Component {
    render() {
        return (
            <div>
                <ul class="nav nav-tabs">
                    <li><Link to={'/view'}>View</Link></li>
                    <li><Link to={'/update'}>Update</Link></li>
                </ul>
            </div>
        );
    }
}

export default Tabs;