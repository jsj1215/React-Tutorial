import React, { useState } from 'react';

function InputTest(props) {

    const style={
        width:"300px",
        padding:"10px",
        border:"3px solid #0000ff"
    }

    // useState() - 값이 변화되는 것을 저장
    const [text,setText]=useState(""); //기본 값 초기화

    // state 값이 변화되는 함수 : input에 쓴 값으로 변경됨
    const onTextChange=(e)=>{
        setText(e.target.value); //이벤트를 받은 타켓의 value로 변경
    }

    // state 값 초기화하는 함수
    const onDataReset=()=>{
        setText("");
    }

    return (
        <>
          <h2>텍스트 박스를 만들어서 내용 입력하고 '리셋'시 초기화 하기</h2>
          <input type="text" onChange={onTextChange} value={text}/>
          <button onClick={onDataReset}>데이터 리셋하기</button> 
          <h3 style={style}>값 : {text}</h3> 
          <p>텍스트 박스에 사용자가 데이터를 입력하면 h3태그에 실시간으로 출력이 되게 하고,
            '리셋'버튼을 클릭하면 값 초기화 하기    

          </p>
        </>
    );
}

export default InputTest;