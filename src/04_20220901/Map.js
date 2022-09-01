import React, { Component } from 'react';

class Map extends Component {

    render() {  
        const numbers=[1.3,5];    
        
        // 1. for문을 사용하여 출력
        for(let i=0; i<numbers.length; i++){
            console.log(numbers[i]);
        }

        //2. map함수를 사용하여 출력
        const numbers2=[1,3,5];
        const listItems = numbers2.map((number,idx)=>{
            console.log("number : " + number + " / idx : " + idx)
            return number+1;
        });
        console.log(listItems); //기존 변수 값에 1씩 더하여 새로운 배열로 만든다.
        
        return (
            <>
            <h3>map 함수란?</h3>
            <p>반복되는 컴포넌트를 랜더링 하기 위해 자바스크립트 배열의 내장 함수인 map()을 사용 한다.</p>
            <p>파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 한다.</p>
            <p>-반복문과 배열을 쉽게 하기 위하여</p>
            </>
        );
    }
}

export default Map;