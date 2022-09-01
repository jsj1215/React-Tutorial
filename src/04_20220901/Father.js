import React, { Component } from 'react';

class Father extends Component {
    render() {
        return (
            <div>
                <h3>Father 데이터 시작</h3>
                <hr/>
                <div>{this.props.children}</div>
                <h3>Father 데이터 끝</h3>
            </div>
            // App02.js : 최 상위 컴포넌트
            // Father.js : App02.js의 자손
            // Child.js : App02.js의 자손. <Father>컴포넌트 안에 위치해 있음.

            // Child.js를 불러온 적이 없지만, App02.js 가 지정해준 자손이어서
            // 자손의 데이터로 끌어올 수 있다.
            // this.props는 부모 컴포넌트가 자손컴포넌트에 내려주는 값으로 부모컴포넌트가 자손으로 Child.js를 연결해줌.
            // children을 통해서 부모가 지정해준 자손의 값을 불러올 수 있음.

            // -> Father.js 는 Child.js와 상속관계가 아니지만,
            // Father.js 안에 위치해 있으면 this.props.children으로 상속 받은 것 처럼 사용할 수 있다.

        );
    }
}

export default Father;