import React, { Component } from 'react';


class App extends Component{
    state={
        name:"",
        age:null,
        errorMessage:""
    }
    nameChange = (e) => {
        let n = e.target.name; //태그의 name 값
        let v = e.target.value; //태그의 value 값
        let err = '';

        //name이 age 인 경우,
        if(n === 'age'){
          if(v !=="" && !Number(v)){ //value값이 숫자가 아니고, 공백이 아닐경우
            err = <strong>나이는 숫자로 입력해야 합니다.</strong>;
          }
        }
        this.setState({
            errorMessage:err //err을 errorMessage State값으로 변경해주기
        });
        this.setState({
            [n]:v //각 name을 찾아서 e벤트 객체의 value값으로 state 값 변경해주기
        });
       

    }

    
    

    render() {

        //변수에 스타일 내용을 담아 적용
        const style={         
            color:"#f00",
            background:"#ffff00"
        }

        return (
          <>
            <form>
              <h1>나의 이름은 {this.state.name}이고 나이는 {this.state.age}세 입니다.</h1>
              <p>이름과 나이를 입력하세요.</p>
              <p>이름 : <input type="text" name="name" onChange={this.nameChange} /></p>
              <p>나이 : <input type="text" name="age" onChange={this.nameChange} /></p>
              <span style={style}>{this.state.errorMessage}</span>
            </form>
          </>
        );
      }
    }
    
    export default App;
    