import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Tabs from '../common/tabs';
import AdminView from './adminview';

class AdminViewAndUpdate extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Tabs />
                <AdminView />
            </div>
        );
    }
}

export default AdminViewAndUpdate;