import React, { Component } from 'react';
import App2 from './App2.css'

class ProductTest_TitleCom extends Component {

    render() {
        return (
            <>
            <div style={{float:"left", marginRight:"30px", lineHeight:"60px"}}><label className="TitleComponents">{this.props.title}</label></div>
           
            </>
        );
    }
}

export default ProductTest_TitleCom;