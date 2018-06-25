import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Pie } from 'react-chartjs-2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
