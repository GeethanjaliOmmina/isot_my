import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Tabs from '../common/tabs';
import AdminView from './adminview';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
class AdminViewAndUpdate extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <NavBar />
                <Tabs />
                <AdminView />
            </section>
        );
    }
}

export default AdminViewAndUpdate;