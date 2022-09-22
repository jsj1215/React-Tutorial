import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 

import Header from './Header';
import Main from './Main';
import Product from './Product';
import Footer from './Footer';
import Notfound from './Notfound';

class App extends Component {
    render() {
        return (
            <div>
                <h2>React Router Dom:싱글페이지에서 쉽게 이동 할 수 있도록 도와줌.</h2>
                <p>사용자가 요청한 url에 따라 해당 url에 맞는 페이지를 보여주는 것.</p>
                <p>라우팅 관련 라이브러리 중에 react router dom을 가장 많이 사용.</p>
                <p>리액트는 spa(싱글페이지어플리케이션)를 제작하기에 최적화된 언어이며, 여러개의 페이지를 사용하여 새로운 페이지를 로드하는 방식이다.</p>
                <p>새로운 페이지를 로드하지 않고, 하나의 페이지 안에서 필요한 데이터만(컴포넌트)만 가져오는 형태이다.</p>
                <p>리액트 라우터는 신규페이지를 불러오지 않은 상황에서 
                    각각의 url에 따라 
                    선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리라고 볼 수 있다.</p>
                <p>라우터에서 가장 많이 사용하는 BrowseRouter, HashRouter를 사용해본다.</p>
                <BrowserRouter>{/*태그 컴포넌트*/}
                    <Header/>
                         <Routes> {/*변경되는 내용이 있는 컴포넌트들(Main,Product)을 <Routes>로 묶어준다. */}
                            <Route path="/" element={<Main/>}></Route>
                            <Route path="/product/:productId*" element={<Product/>}></Route> {/*path 뒤에 :~~~ 입력해주면 링크 연결에 파라미터 값을 사용할 수 있다. */}
                            <Route path="*" element={<Notfound/>}></Route>
                                {/*
                                    - path속성을 사용하여 페이지 경로명 작성.
                                    - '/'기호는 메인페이지(첫페이지) 경로가 됨.
                                    - /product/1로 접근시 상품 상세페이지로 연결됨.
                                    - NotFound 는 경로가 잘못되었을 때 연결되는 페이지
                                */ }
                        </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;