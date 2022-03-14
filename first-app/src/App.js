
import { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppLogo from './AppLogo';
import EmployeeDetails from './EmployeeDetails';
import EmployeeList from './EmployeeList';

//var x = age>60? "senior": "junior"

function App(props) {
  console.log("props", props);

  const [empObjList, setEmpObjList] = useState([]);

  function updateEmpList(newList) {
    console.log("***", newList);
    setEmpObjList(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <AppLogo /> */}
        <AppHeader show={props.showHeader} app={props.appName} />

      </header>
      <div className='emp-container'>
        <div className="row">
          <div className="col-md-6 col-sm-12 left-section">
            <EmployeeList employees={empObjList} />
          </div>
          <div className="col-md-6 col-sm-12 right-section">
            <EmployeeDetails onEmployeeListChange={updateEmpList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
