import React from 'react';
import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Product(props) {

    const productId = useParams().productId;

    //const location = useLocation();

    //const keywords = searchParams;
    //const keyword = searchParams.get('search');

    const navigate = useNavigate();

    return (
        <div>
            <h3>{productId} 상품 페이지</h3>
            <ul>
                {/* <li>hash(주소의 #문자열 뒤의 값) : {location.hash}</li>
                <li>pathName(현재 주소의 경로) : {location.pathname}</li>
                <li>search(?를 포함한 문자열) : {location.search}</li>
                <li>state(페이지로 이동시 임의로 넣을 수 있는 값) : {location.state}</li>
                <li>key(location 객체 고유의 값, 초기값은 default, 페이지 변경될 때마다 고유의 값이 생성) : {location.key}</li> */}

                {/* <li>{keywords}</li>
                <li>{keyword}</li> */}

                <li><button onClick={()=>navigate(-2)}>2페이지 전으로 이동</button></li>
                <li><button onClick={()=>navigate(-1)}>이전 페이지 로 이동</button></li>
                <li><button onClick={()=>navigate(1)}>다음 페이지 로 이동</button></li>
                <li><button onClick={()=>navigate(2)}>다다음 페이지 로 이동</button></li>
                <li><button onClick={()=>navigate('/')}>첫 페이지 로 이동</button></li>
                <li><button onClick={()=>navigate('/',{replace:true})}>처음으로 이동하시겠습니까?</button></li>


            </ul>
        </div>
    );
}

export default Product;