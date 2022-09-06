import React from 'react';
import './App.css';


//이미지 폴더 위치는 반드시 public 폴더 내에 위치시킬 것!!!!
function Product({name,picture,price,link}){

    return(
        <>
            <ul className='best_item'>
                <li>                    
                    <a href={link} title={name}>
                        <img src={picture} alt={name}/>
                    </a>
                    <p>{name}</p>
                    <p>{price}원</p>
                </li>
            </ul>
        </>

    )
}

const fashionProducts = [
    {
        name:'Sac de Jardin Large FA2SB081-FH',
        image:'./img/1.301571207.jpg',
        price:'299,100',
        link:'https://www.wconcept.co.kr/Product/301571207?rccode=pc_topseller'
    },
    {
        name:'22 Fall_ Antique Blue Boucle Half Coat',
        image:'./img/2.301842922.jpg',
        price : '350,100',
        link:'https://www.wconcept.co.kr/Product/301842922?rccode=pc_topseller'
    },
    {
        name:'CLASSIC BOUCLE TWEED JACKET',
        image:'./img/3.301593727.jpg',
        price:'260,823',
        link:'https://www.wconcept.co.kr/Product/301593727?rccode=pc_topseller'
    },
    {
        name:'Cropped Blazer + Midi Skirt SET',
        image:'./img/4.301857183.jpg',
        price:'302,400',
        link:'https://www.wconcept.co.kr/Product/301857183?rccode=pc_topseller'
    }
]


function App() {
    return (
        <>
            <h2 className="title01">BEST</h2>
            {fashionProducts.map(dish =>(
                <Product name={dish.name} picture={dish.image} price={dish.price} link={dish.link}/>
            ))}
            
        </>
    );
}

export default App;