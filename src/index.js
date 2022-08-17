import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <h1>Pepo Gonzalez</h1>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
