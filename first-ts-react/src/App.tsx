import React from 'react';
import logo from './logo.svg';
import './App.css';
import style1 from './style1.module.css';
import style2 from './style2.module.css';
import HocContainer from './hoc/HocContainer';

function App() {
  const name: string = "App name";
  return (
    <div className="App">
      <HocContainer/>
      <div>
        CSS Module EX 
        <div>
          <div className='a'>class a content</div>
          <div className='x'>class x contnet</div>
          <div className={style1.header + " " + style1.x}>class header contnet</div>
          <div className={style2.header}>class header contnet</div>

        </div>
      </div>
    </div>
  );
}

export default App;
