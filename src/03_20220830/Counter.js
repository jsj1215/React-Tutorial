import React, { Component } from 'react';

class Counter extends Component {
    // 1. state 값 초기화
    state={
        num:0
    }
   
    onPlus=()=>{
        // setState() 는 state 값을 변경 할 때 사용하는 함수
        this.setState({
            num : this.state.num+1
        });
    }

    onMinus=()=>{
        if(this.state.num<1){
            alert("0보다 작습니다.");
        }else{

            this.setState({
                num:this.state.num-1
            });
        }
    }

    
    render() {
        return (
            <>
             <h2>{this.state.num}</h2>
             <button onClick={this.onPlus}>+</button>
             <button onClick={this.onMinus}>-</button>   
            </>
        );
    }
}

export default Counter;