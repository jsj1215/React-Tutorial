import React from 'react';

function CreateStudent({name,age,email,onDataChange,onCreate}) {

    const style={
        width:'900px',
        margin : '20px',
        padding : '10px',
        border : '3px solid #00f'
    }

    return (
        <div style={style}>
            <h2>상단 입력양식</h2>
            <input type="text" name='name' placeholder='이름을 입력하세요.' onChange={onDataChange} value={name} />&nbsp;&nbsp;
            <input type="text" name='age' placeholder='나이를 입력하세요.' onChange={onDataChange} value={age}/>&nbsp;&nbsp;
            <input type="text" name='email' placeholder='id@domain.com or net' onChange={onDataChange} value={email}/>&nbsp;&nbsp;
            <button onClick={onCreate}>+</button>

            {/*
            1. name : 데이터 추가될 이름 속성 값
            2. age : 데이터 추가될 나이 속성 값
            3. email : 데이터 추가될 이메일 속성값
            4. onDataChange : 입력양식에 데이터 변경될 때 onChange 이벤트 적용할 함수
            5. onCreate : 내용추가 버튼 클릭시 omClick 이벤트 적용될 함수
            
            */}
        </div>
    );
}

export default CreateStudent;