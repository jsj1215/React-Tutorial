import React from 'react';

function Product({product,onRemove}) {
    return (
        <div>
            <img src={"./img/"+product.fileName}></img>
            <label>상품코드</label><p>{product.id}</p>
            <label>상품명</label><p>{product.title}</p>
            <label>가격</label><p>{product.price}</p>
            <label>설명</label><p>{product.subTitle}</p>
            <button onClick={()=>onRemove(product.id)}>데이터 삭제</button>
            <hr/>
        </div>
    );
}

export default Product;