import React, { Component } from 'react';

class Game extends Component {
    
    shoot=()=>{
        //alert('게임에 당첨되셨습니다.');
        let txt = prompt('등수를 입력하세요.');
        if(txt == "1등"){
            alert('축 당첨 해외여행 상품권에 당첨되셨습니다.');
        }else if (txt == "2등"){
            alert('대형TV에 당첨되셨습니다.');
        }else{
            alert('아쉽지만, 당첨되지 않았습니다.');
        }

        // 명령프롬프트 창을 띄워서 
        // 1등을 입력하면 '축 당첨 해외여행 상품권에 당첨되셨습니다.'
        // 2등을 입력하면 '대형TV에 당첨되셨습니다.'

    }
    render() {
        return (
            <>
              <button onClick={this.shoot}>버튼을 클릭하시어 등수를 입력해주세요.</button>  
            </>
        );
    }
}

export default Game;