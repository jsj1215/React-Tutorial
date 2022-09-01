import React, { Component } from 'react';

class DetailPage extends Component {
    render() {
        const{num,title,subTitle,character} = this.props;
        return (
            <>
               <ul style={{listStyle:"none",width:"500px"}}>                
                    <li style={{backgroundColor:"yellow", width:"500px", height:"30px",
                        textAlign:"left", border:"1px solid black", whiteSpace: 'pre-line'                
                    }}>
                        <b>{this.props.num}. {this.props.title}</b>
                    </li>
                    <li style={{border:"1px solid black",marginTop:"10px",width:"500px", height:"200px"
                    }}>
                        {this.props.subTitle}
                        <br/>
                        <div style={{color:"dodgerblue", marginTop:"10px"}}>특징</div>
                        {this.props.character}
                    </li>
                </ul> 
            </>
        );
    }
}

export default DetailPage;