import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import MainPage from './03_20220830/MainPage';
import MapPage from './03_20220830/MapPage';
import Parent from './03_20220830/Parent3';
import Counter from './03_20220830/Counter';
import CounterFunction from './03_20220830/CounterFunction';
import Game from './03_20220830/Game';




import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MainPage /> 
    <hr/> 
    <MapPage/> 
    <hr/>  
    <Parent/> 
    <hr/> 
    <CounterFunction/>*/}
    <Game/>
    
  </React.StrictMode>
);

reportWebVitals();
