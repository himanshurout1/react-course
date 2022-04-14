import React from 'react';
import logo from './logo.svg';
import './App.css';
import style1 from './style1.module.css';
import style2 from './style2.module.css';
import HocContainer from './hoc/HocContainer';
import RefEx from './refs/RefEx';
import RefExCallback from './refs/RefExCallback';
import Product from './rxjs/Product';
import ProductList from './rxjs/ProductList';
import Dashboard from './rxjs/Dashboard';
import ContainerComp from './redux/ContainerComp';
import TestForm from './unit-test/TestForm';

function App() {
  const name: string = "App name";
  return (
    <div className="App">
      {/* <h2>{name}</h2>
      <TestForm />
      <hr/>
      <TestForm val='Parent Default' />
      <hr/> */}
      <div style={{display: "none"}}>
        <HocContainer />
        <RefEx />
        <RefExCallback />
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

      <div className='row' style={{display:'none'}}>
        <div className='col-6'>
          <Product/>
        </div>
        <div className='col-6'>
          <ProductList />
          <Dashboard />
        </div>
      </div>

      <div>
        <ContainerComp />
      </div>
      
    </div>
  );
}

export default App;
