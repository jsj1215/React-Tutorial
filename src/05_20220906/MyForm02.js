import React, { Component } from 'react';

class MyForm02 extends Component {
    state={
        name:'',
        age:null,
        city:''
    }

    nameChange=(e)=>{
        let n = e.target.name;
        let a = e.target.value;
        
        this.setState({
            [n]:a
        })
    }

    render() {
        
        return (
            
            <form>
                <h1>당신의 이름은 {this.state.name} 이고, 나이는 {this.state.age}살 입니다. 사는 곳은 {this.state.city} 입니다.</h1>
                <p>이름과 나이를 입력하면 h1태그에 자동으로 대입되어 문장 출력하기</p>
                <p>이름을 입력하세요 : </p><input type="text" name="name" onChange={this.nameChange}/>
                <p>나이를 입력하세요 : </p><input type="text" name="age" onChange={this.nameChange}/>
                <p>사는 지역을 입력하세요 : </p><input type="text" name="city" onChange={this.nameChange}/>
            </form>
                
            
        );
    }
}

export default MyForm02;