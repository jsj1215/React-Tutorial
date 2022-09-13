import React, { Component } from 'react';
import ProductTest_ConCom from './ProductTest_ConCom';
import ProductTest_TitleCom from './ProductTest_TitleCom';
import App2 from './App2.css'


const title=[
"채소","과일.견과.쌀","수산.해산.건어물","정육.계란","국.반찬.메인요리","샐러드.간편식","면.양념.오일","생수.음료,우유.커피",
"간식.과자.떡","베이커리.치즈.델리","건강식품","와인","전통주","생활용품.리빙.캐핑","스킨케어.메이크업","헤어.바디.구강",
"주방용품","가전제품","선물하기","반려동물","베이비.키즈.완구"
]
const ProductInfo=[
{img:"./img/1_1655476108525l0.jpg",
productName:"[이자녹스] UV선프로 365 데일리 커버선",
discountPercent:"10%",
discontPrice:"27,000",
price:"30,000"
},
{img:"./img/2.20220907_191535.jpg",
productName:"[비욘드] 토탈 리커버리 인텐스 바디 미스트",
discountPercent:"10%",
discontPrice:"16,200",
price:"18,000"
},
{img:"./img/3.20220907_191553.jpg",
productName:"[참존] 마유 골든 콤플렉스 크림 & 앰플 세트",
discountPercent:"19%",
discontPrice:"17,900",
price:"22,300"
},
{img:"./img/4.20220907_191608.jpg",
productName:"[아이소이] BR 인텐시브 리프팅 스팟 (탄력스팟) 20ml 기획세트",
discountPercent:"",
discontPrice:"32,000",
price:"32,000"
}

]


class ProductTest extends Component {
    render() {
        return (
            <div>
               <h1 className='Title'>Kurly</h1> 
               <hr style={{marginTop:"50px", marginBottom:"50px"}}/>
               <h2 style={{textAlign:"center",marginBottom:"50px"}}>MD의 추천</h2>
               <div className='TopTitle' style={{margin:"0 auto"}}>
               {title.map(list=>(
                    <ProductTest_TitleCom title={list}/>
               ))}
               </div>
               
               <div className='BottomContents'>
               {ProductInfo.map(productList=>(
                    <ProductTest_ConCom img={productList.img} name={productList.productName} percent={productList.discountPercent}
                    dcPrice={productList.discontPrice} price={productList.price}
                    />
               ))}
               </div>
            </div>
        );
    }
}

export default ProductTest;