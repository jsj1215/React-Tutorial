import React, { Component } from 'react';

class Random extends Component {
    state={
        num:0
    }
    goRandom=()=>{
        const answer = prompt("0~10 사이 숫자를 입력하세요.")
        const randomNumber = Math.floor(Math.random() * 11);

        if(answer == randomNumber){
            alert('정답입니다.');
        }else{
            alert('틀렸습니다.');
        }

        this.setState({
            //num : Math.random()
            num : randomNumber
        });
    }
    render() {
        return (
            <>
              <h1>{this.state.num}</h1>  
              <button onClick={this.goRandom}>랜덤 숫자 맞추기</button>
            </>
        );
    }
}

export default Random;