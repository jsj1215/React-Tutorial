import React,{useState,useRef} from 'react';
import CreateProduct from './CreateProduct';
import Product from './Product';

function ProductList(props) {
    // 1. 기본 데이터 직접 입력
    // 5-1. 추가 배열을 입력하도록 변경해줌.
    const [products,setProducts]=useState([
    {
        id:1,
        fileName:"product01.jpg",        
        title:"[스윗밸런스]오늘의 샐러드 8종(리뉴얼)",
        price:"4,900원",
        subTitle:"다채로운 토핑을 얹은 샐러드"
    },
    {
        id:2,
        fileName:"product02.jpeg",        
        title:"[숭의가든]옛날 소 불고기",
        price:"14,400원",
        subTitle:"달큰한 매력의 서울식 불고기"
    }

    ])

    // 2. state값 변경을 위해 usetState 사용하여 값 초기화
    const[inputs,setInputs]=useState({
        fileName:"",
        title:"",
        price:"",
        subTitle:""
    })

    // 2-1. id 값 초기화
    const nextId = useRef(3);

    // 3. 비구조화할당 : inputs 객체의 값(state)을 각 변수에 담는다.
    const {fileName,title,price,subTitle}=inputs; 


    // 4. input에 데이터 입력시 이벤트 리스너를 통해 입력값을 state에 담아준다.
    const onDataChange=(e)=>{
        // 1) 비구조화할당 : 이벤트 값 객체를 각 변수 name과 value에 담는다.
        const{name,value} = e.target;

        // 2) state값을 변경해준다.
        setInputs({
            ...inputs, //배열 복사
            [name]:value
        });
      
       
    }

    // 5. 상품 추가
    const onCreate=()=>{
        // 1) 추가할 내용들을 변수에 담는다.
        const product={
            id:nextId,
            title,            
            fileName,
            price,
            subTitle
        };

        // 2) 기본 배열 products에 추가해준다.
        setProducts([...products,product])//1번에서 생성한 products배열에 5.1)에서 담은 product를 추가해준다.

        nextId.current += 1;
    }

    // 6. 상품 삭제
    const onRemove=id=>{
        setProducts(products.filter(product=>product.id != id))

    }


    return (
        <div>
            <CreateProduct title={title} fileName={fileName} price={price} subTitle={subTitle} 
                            onDataChange={onDataChange} onCreate={onCreate}/>
            {products.map((product)=>(
                <Product product={product} key={product.id} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default ProductList;