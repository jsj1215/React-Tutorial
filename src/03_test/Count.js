import React, { Component } from 'react';

class Count extends Component {
    state={
        num:0
    }

    onPlus=()=>{
        this.setState({
            num : this.state.num+1
        });
    }

    onMinus=()=>{
        this.setState({
            num : this.state.num-1
        });
    }

    render() {        
        return (
            <>
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.onPlus}>+</button>  
                <button onClick={this.onMinus}>-</button> 
            </div>
            </>
        );
    }
}

export default Count;