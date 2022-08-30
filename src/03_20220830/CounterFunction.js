//rsf tab tab -> 함수형 컴포넌트 완성

import React,{useState} from 'react';

function CounterFunction(props) {
    // 초기값 0으로 설정
    const [num,setNum] = useState(0);

    const onPlus=() => {
        setNum(num+1);
    }

    const onMinus=()=>{
        setNum(num-1);
    }


    return (
        <>
        <h2>{num}</h2>
         <button onClick={onPlus}>+</button>  
         <button onClick={onMinus}>-</button>   
        </>
    );
}

export default CounterFunction;