import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <>
              <h3>이름 : {this.props.name}</h3>  
              <h3>나이 : {this.props.age}</h3> 
              <h3>취미 : {this.props.hobby}</h3>
              <hr/> 
              {/* <ul>
                <li>
                    {this.props.img} 
                    <br/>
                    {this.props.productName}
                    <br/>
                    {this.props.price} 원
                </li>                
              </ul> */}

              
              
            </>
        );
    }
}


Child.defaultProps={
    name : '기본 값',
    age : '20',
    hobby : '기본 값'
}

export default Child;