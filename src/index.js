import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar/Index';
import App from './App';
// import Herosection from './components/Herosection/Index'

ReactDOM.render(
  <React.StrictMode>
  <Sidebar/>
    <App />
 
  </React.StrictMode>,
  document.getElementById('root')
);


