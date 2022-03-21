
import { useEffect, useState } from 'react';
import EmployeeContainer from './EmployeeContainer';
import './App.css';
import AppHeader from './AppHeader';

import HooksContainer from './HooksContainer';
import UserContainer from './UserContainer';


function DynamicComp(props) {
  console.log("props", props);

  const [activeMenu, setActiveMenu] = useState(''); // employees / users / hooks

  const menuItems = [
    { key: "employees", "displayName": "Employees", isDefaut: false },
    { key: "users", "displayName": "Users", isDefaut: true },
    { key: "hooks", "displayName": "Comp Hooks", isDefaut: false }
  ];

  useEffect(() => {
    const defaultMenus = menuItems.filter((menu) => menu.isDefaut);
    setActiveMenu(defaultMenus[0].key);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <AppHeader show={props.showHeader} app={props.appName} />

      </header>

      <ul>
        {
          menuItems.map((menu) =>
            <li onClick={() => setActiveMenu(menu.key)}>{menu.displayName}</li>
          )
        }
      </ul>
      {activeMenu === 'employees' && <EmployeeContainer />}
      {activeMenu === 'users' && <UserContainer />}
      {activeMenu === 'hooks' && <HooksContainer />}

    </div>
  );
}

export default DynamicComp;
