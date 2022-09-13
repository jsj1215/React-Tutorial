import React, { Component } from 'react';
import './App.css';

class LoginTest extends Component {

    state={
        inputId:"",
        inputPwd:""
    }

    changeData=(e)=>{
        let n = e.target.name;
        let v = e.target.value;

        this.setState({
            [n]:v
        })
    };

    render() {
        return (
            <>
            <div className="LeftPart">
                <form style={{textAlign:"center"}}>
                    <h1>Kurly</h1>
                    <hr/>
                    <h3 className='TextLogin'>로그인</h3>
                    <br/>
                    <input className="InputTag" type="text" placeholder='아이디를 입력해주세요.' name="inputId" onChange={this.changeData}/>
                    <br/>
                    <input className="InputTag" type="password" placeholder='비밀번호를 입력해주세요.' name="inputPwd" onChange={this.changeData}/>
                    <br/> 
                    <div className='TextFindInfo'>               
                    <a style={{borderRight:"1px gray"}}>아이디 찾기</a>
                    
                    <a>비밀번호 찾기</a>
                    </div>
                    <br/>
                    <input className="ButtonTag" type="button"value={"로그인"}/>
                    <br/>
                    <input className="ButtonTag" type="button"value={"회원가입"}/>
                </form>  
            </div>
            <div className='RightPart'>
                <p>아이디 입력 결과 : {this.state.inputId}</p>
                <br/>
                <p>비밀번호 입력 결과 : {this.state.inputPwd}</p>
            </div>
            </>
        );
    }
}

export default LoginTest;