import React from 'react';
import {Link} from 'react-router-dom';

function Main(props) {
    return (
        <div>
            <h3>메인페이지입니다.</h3>
            <p>html문서에서는 a링크 사용</p>
            <p>리액트에서는 {/*<Link to="경로명">링크</Link> */}</p>
            <ul>
                <Link to="/product/1"><li>1번 상품</li></Link>
                <Link to="/product/2"><li>2번 상품</li></Link>
                <Link to="/product/3"><li>3번 상품</li></Link>
                <Link to="/product/4"><li>4번 상품</li></Link>
            </ul>
        </div>
    );
}

export default Main;