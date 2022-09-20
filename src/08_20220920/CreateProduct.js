import React from 'react';

function CreateProduct({fileName,title,price,subTitle,onDataChange,onCreate}) {

    const style={
        width:'1200px',
        margin : '20px',
        padding : '10px',
        border : '3px solid #00f'
    }
    const inputStyle={
        width:'250px'
    }

    return (
        <div style={style}>
            <h2>상품 데이터 입력/출력/삭제 하기</h2>
            <label>이미지 파일명</label>
            <input type="text" name='fileName' placeholder='이미지 파일명을 입력하세요.' onChange={onDataChange} value={fileName} style={inputStyle}/><br/>
            <label>상품명</label>
            <input type="text" name='title' placeholder='상품명을 입력하세요.' onChange={onDataChange} value={title} style={inputStyle} /><br/>
            <label>가격</label>
            <input type="text" name='price' placeholder='가격을 입력하세요.' onChange={onDataChange} value={price} style={inputStyle} /><br/>
            <label>설명</label>
            <input type="text" name='subTitle' placeholder='설명을 입력하세요.' onChange={onDataChange} value={subTitle} style={inputStyle} /><br/>
            <button onClick={onCreate}>데이터 입력</button>

            
        </div>
    );
}

export default CreateProduct;