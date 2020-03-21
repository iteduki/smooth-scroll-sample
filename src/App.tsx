import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" id="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
        return (<div id={v.toString()}>
          <hr />
          <h3>{v}</h3>
          <img src={logo} className="App-logo" alt="logo" />
        </div>)
      })}
    </div>
  );
}

export default App;
