
import { useEffect, useState } from 'react';
import EmployeeContainer from './EmployeeContainer';
import './App.css';
import AppHeader from './AppHeader';

import HooksContainer from './HooksContainer';
import UserContainer from './UserContainer';
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';


function App(props) {
  console.log("props", props);

  const menuItems = [
    { key: "employees", "displayName": "Employees" },
    { key: "users/all", "displayName": "Users" },
    { key: "hooks", "displayName": "Comp Hooks" }
  ];


  return (
    <div className="App">
      <header className="App-header">
        <AppHeader show={props.showHeader} app={props.appName} />

      </header>


      <HashRouter>
        <ul>
          {
            menuItems.map((menu) =>
              <li className='menu-item'>
                <Link to={'/' + menu.key}>{menu.displayName}</Link>
                {/* <a href={'/'+menu.key}>{menu.displayName}</a> */}
              </li>
            )
          }
        </ul>
        <Routes>
          <Route path='/employees' element={<EmployeeContainer />} />
          <Route path='/users' element={<UserContainer />}>
            <Route path='all' element={<UserList />} />
            <Route path='new' element={<UserDetails />} />
            <Route path=':id' element={<UserDetails />} />
          </Route>
          <Route path='/hooks' element={<HooksContainer />} />
          <Route path='/' element={<EmployeeContainer />} />
        </Routes>

        {/* <Swicth>
          <Route path='/employees'>
            <EmployeeContainer />
          </Route>
          <Route path='/users'>
            <UserContainer />
          </Route>
        </Swicth> */}
      </HashRouter>

    </div>
  );
}

export default App;
