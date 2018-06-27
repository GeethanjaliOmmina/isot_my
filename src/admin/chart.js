import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import NavBar from '../common/navbar';
var sectionStyle={
    width:"100%",
    height:"800px",
    backgroundImage:`url(${`./images/back1.jpg`})`,
};
//import './chart.css';
// const obj = () => {

//     var ctx = document.getElementById("myChart").getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255,99,132,1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero:true
//                     }
//                 }]
//             }
//         }
//     });
// };

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [400, 500],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class Chart extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <NavBar />
                <div class="chartstyle"><Pie data={data} height={70} /></div>
                <div class="boxadjust"><div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Jun 18
    <span class="caret"></span></button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">May 18</a></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Apr 18</a></li>
                    </ul>
                </div>
                </div>
            </section>
        );
    }
}
export default Chart;
