import React from 'react';
import './App.css';

function CreateProduct({fileName,title,price,subTitle,onDataChange,onCreate}) {

    // const style={
    //     width:'1200px',
    //     margin : '20px',
    //     padding : '10px',
    //     border : '3px solid #00f'
    // }
  

    return (
        <div className="InputBox">
            <h2>상품 데이터 입력/출력/삭제 하기</h2>
            <table className='InputTbl'>
                <tr>
                    <th>이미지 파일명</th>
                    <td><input type="text" name='fileName' placeholder='이미지 파일명을 입력하세요.' onChange={onDataChange} value={fileName}/></td>
                </tr>
                <tr>
                    <th>상품명</th>
                    <td><input type="text" name='title' placeholder='상품명을 입력하세요.' onChange={onDataChange} value={title}/></td>
                </tr>
                <tr>
                    <th>가격</th>
                    <td><input type="text" name='price' placeholder='가격을 입력하세요.' onChange={onDataChange} value={price}/></td>
                </tr>
                <tr>
                    <th>설명</th>
                    <td><input type="text" name='subTitle' placeholder='설명을 입력하세요.' onChange={onDataChange} value={subTitle}/></td>
                </tr>
            </table>
            
            <button className="InputBtn" onClick={onCreate} >데이터 입력</button>
            
        </div>
    );
}

export default CreateProduct;