import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Day from './Day';
import DayList from './DayList'
import './App.css'
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom';
import Notfound from '../09_20220922/Notfound';

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <Header/>      
                    <Routes>      
                        {/* exact : 반드시 path경로와 동일 할 때 실행시켜라! */}
                        <Route exact path='/' element={<DayList/>} />
                        <Route  path='/day/:day' element={<Day/>} />
                        {/*경로를 잘 못 입력했을 때 : NotFound */}
                        <Route  path='*' element={<Notfound/>}/>

                    </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;