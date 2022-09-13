import React,{useState} from 'react'; //Hooks가 useState()함수를 사용할 수 있게

function Counter(props) {

    //num : 지정할 숫자 - 변수에 담기
    //setNum : 변화될 숫자 - 변수에 담기

    // const[값 변수, 값 변경함수] = useState(기본값);
    const [num,setNum] = useState(1); //기본값을 1로 한다.
    const [disabledValue,setdisabledValue] = useState(true);
   
    
    // 1씩 증가하는 함수
    const onIncrease=()=>{
        
        setNum(num+1);
        alert("[onIncrease] :"+num);
        if(num > 0){
            setdisabledValue(false);
        }else{
            setdisabledValue(true);
        }

    }

    // 1씩 감소하는 함수
    const onDecrease=()=>{
        
        // 1이하로 감소 못하도록, 1일 경우 마이너스 버튼 비활성화
        alert("[onDecrease] :"+num);
        if(num > 1){
            setNum(num-1);
            setdisabledValue(false);
        }

        
        if((num-1) == 1){
            setdisabledValue(true);
        }

        
    }

    const Color01={
        color:"#ff0000",
        padding:"10px",
        border:"2px solid #00f"
    }
    return (
        <div style={Color01}>
            <h2>숫자 증가/감소 : {num}</h2>
            <button id='increase' onClick={onIncrease}>+</button>
            <button id='decrease' onClick={onDecrease} disabled={disabledValue}>-</button>
        </div>
    );
}

export default Counter;