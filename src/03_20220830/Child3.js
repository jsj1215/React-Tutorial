import React, { Component } from 'react';

// 함수형 컴포넌트
// function Child3({name,age,hobby}) {
const Child3=({name,age,hobby}) => {
  
    return (
        <>
           <h1>함수형 컴포넌트</h1>
           <h3>이름:{name}</h3> 
           <h3>나이:{age}</h3> 
           <h3>취미:{hobby}</h3> 
        </>
    );
    
}

export default Child3;