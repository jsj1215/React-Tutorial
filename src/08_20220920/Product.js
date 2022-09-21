import React from 'react';
import './App.css';

function Product({product,onRemove}) {
    return (
        <div className='ProductCom'>
            <img src={"./img/"+product.fileName}></img>
            <table className='ProductTbl'>
                <tr>
                    <th>상품코드</th>
                    <td>{product.id}</td>
                </tr>
                <tr>
                    <th>상품명</th>
                    <td>{product.title}</td>
                </tr>
                <tr>
                    <th>가격</th>
                    <td>{product.price}</td>
                </tr>
                <tr>
                    <th>설명</th>
                    <td>{product.subTitle}</td>
                </tr>
            </table>
            {/* <label>상품코드</label><p>{product.id}</p>
            <label>상품명</label><p>{product.title}</p>
            <label>가격</label><p>{product.price}</p>
            <label>설명</label><p>{product.subTitle}</p> */}
            <button onClick={()=>onRemove(product.id)} className='RemoveBtn'>데이터 삭제</button>
            <hr/>
        </div>
    );
}

export default Product;