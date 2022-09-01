import React, { Component } from 'react';
import Father from './Father';
import Child from './Child';

class App02 extends Component {
    render() {
        return (
            <>
              <Father>
                <Child/>
              </Father>  
              
            </>
            //Father컴포넌트 불러오고, 그 안에 Child 컴포넌트 불러옴.
        );
    }
}




export default App02;