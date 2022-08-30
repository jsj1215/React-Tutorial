import React, { Component } from 'react';

class Child2 extends Component {
    render() {
        // 비구조 할당 방법 : propps를 변수에 담아서 사용.
        // this.props.프롭스명 으로 접근하는 것 보다 훨씬 간결함.
        const {name,age,hobby} = this.props;
        
        return (
            <>
                <h3>이름: {name}</h3>
                <h3>나이: {age}</h3>
                <h3>취미: {hobby}</h3>
            </>
        );
    }
}

export default Child2;