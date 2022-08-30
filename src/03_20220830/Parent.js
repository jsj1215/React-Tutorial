import React, { Component } from 'react';
import Child from './Child';


class Parent extends Component {
    render() {
        return (
            <>
                <Child name="홍길동" age="30" hobby="운동"/>
                <hr/>
                <Child name="홍길동2" age="31" hobby="독서"/> 
                
                {/* <Child img="사진1.jpg" productName="Hello!원양산 손질 오징어 300g" price="5,200"/>
                <hr/>
                <Child img="사진2.jpg" productName="[밀도]담백식빵" price="5,850"/> 
                <hr/>
                <Child img="사진3.jpg" productName="[로컬식탁] 국산 가자미 고추장조림(냉장)" price="11,997"/> 
                <hr/>
                <Child img="사진4.jpg" productName="[델피파] 유기농 엑스트라버진 150ml" price="1,900"/> 
                <hr/> */}
                <Child/>

            </>
        );
    }
}


export default Parent;