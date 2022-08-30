import logo from './logo.svg';
import './App.css';

// 2. 함수형 컴포넌트
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h2>안녕하세요.</h2>
        <p className="title01">Hello,Stranger</p>

      </header>
    </div>
  );
}

export default App;
