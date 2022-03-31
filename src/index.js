import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

// document.addEventListener('DOMContentLoaded', () => {
      // })
const na = document.querySelector('.NavBar')
    window.addEventListener('scroll', () => {
      if(window.scrollY > 30){
      na.classList.remove('Navdown');
      na.classList.add('Navup')
    }
    else{
      na.classList.remove('Navup');
      na.classList.add('Navdown');
      
      
    }
    })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
