import React, { Component } from 'react';

class ProductSelect extends Component {

state={
    menu:'에그 샐러드',
    selectValue:''
  
}
SelectValue=(e)=>{
    let eventValue = e.target.value;
    //alert(eventValue);
    this.setState({
        selectValue:eventValue
    });
}

    render() {
        const selectTextStyle={
            background:"yellow",
            fontWeight:"bold",
            width:"300px",
            marginTop:"250px"
        }
        return (
            <>
            <form>
            <h2>상품을 선택해주세요.</h2>
               <select value={this.state.value} onChange={this.SelectValue}>
                    <option value="에그 샐러드">에그 샐러드</option>
                    <option value="리코타치즈 샐러드">리코타치즈 샐러드</option>
                    <option value="단호박 샐러드">단호박 샐러드</option>
                    <option value="고구마 샐러드">고구마 샐러드</option>
                    <option value="닭가슴살 샐러드"> 닭가슴살 샐러드</option>
                    <option value="파스타 샐러드">파스타 샐러드</option>
                </select> 
                <p style={selectTextStyle}>{this.state.selectValue}</p>
            </form>
            </>
        );
    }
}

export default ProductSelect;