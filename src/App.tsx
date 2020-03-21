import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { scroller } from 'react-scroll'

function App() {
  const ref = useRef<HTMLElement>(null);

  const scrollToRef = () => {
    if (!ref.current) {
      return;
    }
    scroller.scrollTo(ref.current.id, {
      smooth: true,
      duration: 500,
      delay: 100,
    })
  }

  const array = Array.from({ length: 20 }, (_, k) => k)

  return (
    <div className="App">
      <header id="header" ref={ref}>
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
      {array.map(v => {
        return (
          <>
            <hr />
            <h3>{v}</h3>
            <button onClick={scrollToRef}>スクロール</button>
          </>
        )
      })}
    </div >
  );
}

export default App;
