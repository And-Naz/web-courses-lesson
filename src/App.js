import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import someData from "./someData.json"

function App() {
  useEffect(() => {
    alert('barev bolorin/dzez')
    console.log(someData)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in Web Courses
        </a>
      </header>
    </div>
  );
}

export default App;
