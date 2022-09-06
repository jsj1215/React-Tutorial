import React, { Component } from 'react';

class MyForm extends Component {
    state={
        name:'',
    }

    nameChange=(e)=>{
        this.setState({
            name:e.target.value
        });
    }

    render() {

        let header="";
        if(this.state.name){ // state 값이 있으면 출력
            header=<h1>Hello {this.state.name}</h1>
        }else{//state 값이 없으면 출력안함.
            header="";
        }


        return (
            <>
            <form>
                {/* <h1>Form양식 {this.state.name}</h1> */}
                {header}
                <p>HTML에서와 마찬가지로 React는 사용자가 웹 페이지와 상호 작용할
                    수 있도록 Form을 사용합니다.
                </p>
                <p>***input 태그의 값이 변경되면(onChange) h1태그의 텍스트가 변경</p>

                <p>이름을 입력하세요.</p>
                <input type="text" onChange={this.nameChange}/>
                <ul>
                    <li>- nameChange 함수에 작성된 [e.target.value]는 이벤트를 받는 DOM의 value값을 받아오는 구문</li>
                    <li>- [e]는 이벤트 객체를 받는 매개변수, 그 타켓의 value 값을 받오는 JS적 문법</li>
                    <li>- state는 자신의 컴포넌트에 변하는 값을 저장하는 곳</li>
                    <li>- setState()함수는 state 값을 변경시키는 함수</li>
                </ul>
            </form>
                
            </>
        );
    }
}

export default MyForm;