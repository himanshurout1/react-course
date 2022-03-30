
import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';

import { BrowserRouter, HashRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

// import EmployeeContainer from './EmployeeContainer';
// import HooksContainer from './HooksContainer';
// import UserContainer from './UserContainer';
// import UserDetails from './UserDetails';
// import UserList from './UserList';
// import NonExistentRoute from './NonExistentRoute';
const EmployeeContainer = React.lazy(() => import("./EmployeeContainer"));
const HooksContainer = React.lazy(() => import("./HooksContainer"));
const UserContainer = React.lazy(() => import("./UserContainer"));
const UserDetails = React.lazy(() => import("./UserDetails"));
const UserList = React.lazy(() => import("./UserList"));
const NonExistentRoute = React.lazy(() => import("./NonExistentRoute"));
const ContextEx = React.lazy(() => import("./context/ContextEx"));
const ErrorHandler = React.lazy(() => import("./error-handling/ErrorHandler"));
const FargmentEx = React.lazy(() => import("./fragments/FargmentEx"));


function App(props) {
  console.log("props", props);

  const menuItems = [
    { key: "employees", "displayName": "Employees" },
    { key: "users", "displayName": "Users" },
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
          {/* <Route path='employees' element={<EmployeeContainer />} />
          <Route path='hooks' element={<HooksContainer />} />
          <Route path='users' element={<UserContainer />}>
            <Route path='all' element={<UserList />} />
            <Route path='new' element={<UserDetails />} />
            <Route path=':id' element={<UserDetails />} />
            <Route index element={<UserList />} />
          </Route>
          <Route index element={<EmployeeContainer />} />
          <Route path='*' element={<NonExistentRoute />} /> */}


          <Route path='employees' element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <EmployeeContainer />
            </React.Suspense>
          } />

          <Route path='hooks' element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <HooksContainer />
            </React.Suspense>
          } />

          <Route path='users' element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <UserContainer />
            </React.Suspense>
          }>
            <Route path='new' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <UserDetails />
              </React.Suspense>
            } />
            <Route path=':id' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <UserDetails />
              </React.Suspense>
            } />
            <Route index element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <UserList />
              </React.Suspense>
            } />
          </Route>

          <Route path='concepts' element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <Link to='/concepts/context'>Context</Link> { }
              <Link to='/concepts/handler'>Error Boundary</Link>
              <Link to='/concepts/fragments'>Fragments</Link>
              <Outlet />
            </React.Suspense>
          }>
            <Route path='context' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <ContextEx />
              </React.Suspense>
            } />

            <Route path='handler' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <ErrorHandler />
              </React.Suspense>
            } />

            <Route path='fragments' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <FargmentEx />
              </React.Suspense>
            } />

          </Route>


          <Route index element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <EmployeeContainer />
            </React.Suspense>
          } />

          <Route path='*' element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <NonExistentRoute />
            </React.Suspense>
          } />

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
