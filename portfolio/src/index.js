import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Section1 from './section1';
import Navigation from './navbar.js';
import Section2 from './section2.js';
import Section3 from './section3.js';
import Section4 from './section4.js';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Section1 />
    <Section3 />
    <Section2 />
    <Section4/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
