import React, { Component } from 'react';


//부모 컴포넌트
function App01(props) {
    return (
        <>
            <h1>함수형 컴포넌트와 클래스형 컴포넌트 출력하기</h1>
            <FuncComp initNumber={2022} />
            <ClassComp initNumber={2022} />
            <Parent />
        </>
    );
}
//자식 컴포넌트1 : 함수형
function FuncComp(props){
    return(
        <>
            <h2>함수형 컴포넌트 만들기</h2>
            <p>Number:{props.initNumber}</p>
        </>
    );
}
//자식 컴포넌트2 : class형
class ClassComp extends React.Component{

    state={
        number : this.props.initNumber        
    }
    P
    render(){
        return(
            <>
            <h2>클래스형 컴포넌트 만들기</h2>
            <p>Number:{this.state.number}</p>            
            </>
        );
    }
}

class Parent extends React.Component{
    render(){
        return(
            <Child name="이름1" gender="여" age="20"/>

        );
    }
}



//자식 컴포넌트2 : class형
class Child extends React.Component{

    state={
        name : this.props.name,
        gender : this.props.gender,
        age : this.props.age,
        promptValue : ""
    }

    PutData=()=>{
        const txt = prompt("입력해주세요.");
        this.setState({
            promptValue:txt
        });
    }

    render(){
        return(
            <>            
            <p className="txt_color01">Name:{this.props.name}</p>
            <p>Gender:{this.props.gender}</p>
            <p>Age:{this.props.age}</p>
            <button onClick={this.PutData}>버튼클릭후, 내용을 입력하세요.</button>
            <p>입력받은 값 : {this.state.promptValue}</p>
            </>
        );
    }
}





export default App01;