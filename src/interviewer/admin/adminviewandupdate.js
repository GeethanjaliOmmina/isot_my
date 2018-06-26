import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Tabs from '../common/tabs';
import AdminView from './adminview';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/img2.jpg`})`,
};
class AdminViewAndUpdate extends Component {
    render() {
        return (
            <section style={sectionStyle}>
            <div>
                <NavBar />
                <Tabs />
                <AdminView />
            </div>
            </section>
        );
    }
}

export default AdminViewAndUpdate;