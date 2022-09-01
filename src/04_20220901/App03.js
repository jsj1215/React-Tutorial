import React from 'react';
import Main from './Main';

const App03 = () => {
    // 1. 배열 객체 선언,할당
    // const names=[
    //     ["상품1"],
    //     ["상품2"],
    //     ["상품3"]
    // ];

    const names=[
        {name:"상품1",price:"29,000원",discount:"30%"},
        {name:"상품2",price:"39,000원",discount:"20%"},
        {name:"상품3",price:"49,000원",discount:"10%"}
    ];
    // 2. nameList객체에 map함수를 사용하여 names 배열 내용을 Main컴포넌트의 props로 넘겨주겠다.
    //const nameList=names.map((name)=>(<Main title={name}></Main>))

    // 다차원 배열
    //const nameList=names.map((v)=>(<Main name={v[0]} price={v[1]} discount={v[2]}></Main>))
    const nameList=names.map((v)=>(<Main key={v.name} price={v.price} discount={v.discount}></Main>))

    return (
        <>
        <ul>
            <li>
                {nameList}
           </li> 
           <li>
                {nameList}
           </li> 
           <li>
                {nameList}
           </li> 
        </ul>

        <p>키 값을 설정하는 목적 : 요소의 리스트를 만들 때
            React에서 컴포넌트를 렌더링 하였을 때 어떤 아이템이 변경되었는지 빠르게 감지하기 위해 사용한다.(변경,추가,삭제 등)
        </p>
        <p>만약 key가 설정되지 않았다면, 가상DOM을 순차적으로 비교하면서 감지하기 때문에 key가 없을때보다 속도가 느리다.</p>
        <p>map함수 인자로 전달되는 함수 내부에서 컴포넌트  props를 설정하는 것과 같이 작성한다.</p>
        <p>key는 고유한 값이어야 한다. 배열 요소의 고유한 값을 사용하거나 index로 사용한다.</p>
        <p>(단, index는 배열의 순서가 바뀌면 index도 바뀌기 때문에 권장하지 않는다.)</p>

        </>
    );
};

export default App03;