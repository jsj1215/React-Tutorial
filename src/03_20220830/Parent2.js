import React, { Component } from 'react';
import Child2 from './Child2';

class Parent2 extends Component {
    render() {
        return (
            <>
              <Child2 name="김철수" age="20" hobby="등산"/>  
            <hr/>
              <Child2 name="이영희" age="24" hobby="영화보기"/> 
            </>
        );
    }
}

export default Parent2;