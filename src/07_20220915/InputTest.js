import React,{useDebugValue, useState} from 'react';

function InputTest(props) {
    
    const style={
        width:"500px",
        padding:"10px",
        margin:"10px",
        border:"3px solid #ff0000"
    }

    // 1. state 관리,초기화
    const [inputs,setInputs] = useState({
        userName:"",
        userId:""
    })

    const {userName,userId}=inputs;

    // # 데이터 입력시 텍스트 변경 함수
    const onDataChange=(e)=>{
        const {value,name}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    // # 데이터 리셋 함수
    const onDataReset=()=>{
        setInputs({
            userName : "",
            userId : ""
        });

    }
    
    
    return (
        <div style={style}>
            <h2>여러 데이터 입력값 출력하기</h2>
            <input type="text"placeholder='이름을 입력하세요.'name='userName' value={userName} onChange={onDataChange}/>
            <input type="text"placeholder='아이디를 입력하세요.'name='userId' value={userId} onChange={onDataChange}/>
            <button onClick={onDataReset}>데이터 초기화</button>
            <h3>값 : {userName}({userId})</h3>
        </div>
    );
}

export default InputTest;