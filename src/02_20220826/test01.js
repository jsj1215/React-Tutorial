// 컴포넌트 방식으로 react를 react.js로 부터 가져오겠다.
// 컴포넌트 : 재사용이 가능한 UI컨텐츠 만들 때 사용.
import React, { Component } from 'react';
import '../App.css';

class test01 extends Component {
    render() {
        return (
            <div>
                <h2 className = "title02">클래스형 컴포넌트 입니다.</h2>
            </div>
        );
    }
}

export default test01;