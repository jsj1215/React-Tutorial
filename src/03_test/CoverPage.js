import React, { Component } from 'react';
import DetailPage from './DetailPage';

class CoverPage extends Component {
    render() {
        return (
            <>
            <h1 style={{marginLeft:"40px"}}>React 3일차 학습내용</h1>
            <DetailPage 
                num="1" 
                title="Component 개념과 활용"                 
                subTitle={["- 리액트로 만들어진 앱을 이루는 최소한의 단위.",<br/>,
                            "- 재사용 가능한 UI"
                        ]}
                character={["1) Component이름은 항상 대문자로 시작하도록 한다.",<br/>,
                            "2) 함수형 과 class형이 있다."
                            ]}
                />
            <DetailPage 
                num="2" 
                title="props 개념과 활용" 
                subTitle={["- properties의 줄임말",<br/>,
                            "- 상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용한다.(단방향 데이터 흐름 갖는다.)"
                            ]}
                character={["1) 컴포넌트에 매개변수처럼 전달하는 것이다. ",<br/>,
                "2) 프로퍼티에 문자열을 전달할 때는 큰따옴표(\" \")를, 문자열 외의 값을 전달할 때는 중괄호(\{ \})를 사용 한다. "
                ,"3) 프로퍼티는 수정할 수 없다. "]}                            
                />  
            <DetailPage 
                num="3" 
                title="state 개념과 활용" 
                subTitle={["- 리액트에서 앱의 유동적인 데이터를 다루기 위해 있는 객체",<br/>,
                            "- props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리된다는 차이가 있다."
                            ]}
                character={["1) 컴포넌트 안에서 사용된다",<br/>,
                "2) State 객체를 사용하고 싶다면 컴포넌트를 생성할 때 가장 윗부분(render() 함수보다 먼저)에 constructor() 함수를 적어준다. "
                ]}
                /> 

            </>
        );
    }
}

export default CoverPage;