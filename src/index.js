import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
// import App from './App';
import CoverPage from './03_test/CoverPage';
import Count from './03_test/Count';
import Random from './03_test/Random';
import MapPage from './03_20220830/MapPage';
import Parent from './03_20220830/Parent3';
import Counter from './03_20220830/Counter';
import CounterFunction from './03_20220830/CounterFunction';
import Game from './03_20220830/Game';
import App01 from './04_20220901/App01';
import App02 from './04_20220901/App02';
import Map from './04_20220901/Map';
import App03 from './04_20220901/App03';



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
    <CounterFunction/>
    <Game/>

    //03_test
    <Count/>
    <Random/>
    <CoverPage/>

    //04_20220901
    <App01/>
    <App02/>
    <Map/>

    */}

    <App03/>
    
    
  </React.StrictMode>
);

reportWebVitals();
