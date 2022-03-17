
import { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppLogo from './AppLogo';
import EmployeeDetails from './EmployeeDetails';
import EmployeeList from './EmployeeList';
import FnTimer from './FnTimer';
import Timer from './Timer';
import UserDetails from './UserDetails';
import UserList from './UserList';

//var x = age>60? "senior": "junior"

function App(props) {
  console.log("props", props);

  const [empObjList, setEmpObjList] = useState([]);
  const [editEmpObj, setEditEmpObj] = useState({});
  const [showTimer, setShowTimer] = useState(true);

  function updateEmpList(newList) {
    console.log("***", newList);
    setEmpObjList(newList);
  }

  function onEmpEdit(editObj) {
    console.log("Emp object for edit", editObj);
    setEditEmpObj(editObj);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <AppLogo /> */}
        <AppHeader show={props.showHeader} app={props.appName} />

      </header>
      <div className='emp-container' style={{ display: 'none' }}>
        <div className="row">
          <div className="col-md-6 col-sm-12 left-section">
            <EmployeeList employees={empObjList} onEmployeeEdit={onEmpEdit} />
          </div>
          <div className="col-md-6 col-sm-12 right-section">
            <EmployeeDetails onEmployeeListChange={updateEmpList} editObj={editEmpObj} />
          </div>
        </div>
      </div>

      <div className='emp-container' style={{ display: 'none' }}>
        <div className="row">
          <div className="col-md-6 col-sm-12 left-section">
            <UserList />
          </div>
          <div className="col-md-6 col-sm-12 right-section">
            <UserDetails />
          </div>
        </div>
      </div>

      <div className='emp-container'>
        <button type="button" onClick={()=>setShowTimer(!showTimer)}>Show/Hide Timer</button>
        <div>
          Class based timer component:
          {
            showTimer && <Timer />
          }
        </div>
        <div>
          Function based timer component:
          {
            showTimer && <FnTimer />
          }
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
