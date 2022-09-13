import React, { Component } from 'react';
import App2 from './App2.css'

class ProductTest_ConCom extends Component {
    render() {
        return (
            <>
            <div className="ProductPiece">
                <img  src={this.props.img} alt={this.props.name}>
                </img>
                <p>{this.props.name}</p>
                <p>{this.props.percent}</p>
                <p>{this.props.dcPrice}</p>
                <p>{this.props.price}</p>
                </div>
            </>
        );
    }
}

export default ProductTest_ConCom;