import React, { useRef } from 'react';
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

  const array = Array.from({ length: 10 }, (_, k) => k)

  return (
    <div className="App">
      {array.map(v => {
        return (
          <>
            <hr />
            <h3>{v}</h3>
            <button onClick={scrollToRef}>スクロール</button>
          </>
        )
      })}
      <header id="header" ref={ref}>
        <h1>Header</h1>
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
