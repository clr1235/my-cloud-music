import logo from './logo.svg';
import { Button } from 'antd-mobile'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
