import React from 'react';
import './App.css';
import { scroller } from 'react-scroll'

function App() {
  const scrollToId = (id: string) =>
    scroller.scrollTo(id, {
      smooth: true,
      duration: 500,
      delay: 100,
    })

  const array = Array.from({ length: 20 }, (_, k) => k)

  return (
    <div className="App">
      {array.map(v => {
        return (
          <>
            <hr />
            <h3>{v}</h3>
            <button onClick={() => scrollToId(v.toString())}>下の同じ番号へスクロール</button>
          </>
        )
      })}
      <header id="header">
        <h1>Header</h1>
      </header>
      {array.map(v => {
        return (
          <div id={(v).toString()}>
            <hr />
            <h3>{v}</h3>
            <button onClick={() => scrollToId((v + 1).toString())}>ひとつ下の番号へスクロール</button>
          </div>
        )
      })}
    </div >
  );
}

export default App;
