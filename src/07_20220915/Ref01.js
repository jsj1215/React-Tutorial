import React, { useState, useRef } from 'react';
import './Ref.css'

function Ref (props) {

    const [inputs,setInputs]=useState({
        password:'',
        clicked:false,
        validated:false
    })

    //ref 생성
    const passwordInput = useRef();
    const {password,clicked,validated}=inputs;

    // 패스워드 입력시 출력되는 함수
    const onInputChange=e=>{
        setInputs({
            password:e.target.value
        });
    }

    // 검증하기 버튼 클릭시 실행되는 함수 = 패스워드 검증
    const onInputClick=()=>{
        setInputs({
            clicked:true,
            validated:password === '1234'
        });
        password.input.current.focus();
    }

    return (
        <>
            <h2>useRef 함수</h2>
            <p>ref는 특정 Dom을 선택해야 하는 상황이 발생될 때 사용하는 기능.
                (DOM을 선택해 직접 접근하기 위해)
                클래스 컴포넌트에서 사용.
                함수형 컴포넌트 : uesRef
            </p>
            <p>제이쿼리에서 DOM을 선택할 때는 [getElementById]혹은
                [querySelector]를 사용합니다.
            </p>
            <p>특정 input태그에 포커스, 스크롤 값 조작, canvas요소에 그림 그리기</p>
            <input 
            type="password" 
            value={password} 
            onChange={onInputChange} 
            className={clicked ? (validated ? 'success':'failure'):''}
            ref={passwordInput}
            />
            /*삼항조건연산자 조건식?참:거짓*/
            <button onClick={onInputClick}>검증하기</button>
            <p>검증하기 버튼 클릭하면 매번 input 태그로 focus가 이동되는 것을 확인 할 수 있다.</p>
        </>
    );
}


export default Ref;