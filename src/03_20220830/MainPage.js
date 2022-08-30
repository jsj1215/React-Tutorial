import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// 부모 요소 : 부모 컴포넌트
class MainPage extends Component {
    render() {
        return (
            <>
            
                <Header/>
                <Main/>
                <Footer/>                
            </>
        );
    }
}

export default MainPage;