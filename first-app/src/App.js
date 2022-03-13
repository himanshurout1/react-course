
import './App.css';
import AppHeader from './AppHeader';
import AppLogo from './AppLogo';
import EmployeeDetails from './EmployeeDetails';
import EmployeeList from './EmployeeList';

//var x = age>60? "senior": "junior"

function App(props) {
  console.log("props", props);
  return (
    <div className="App">
      <header className="App-header">
        {/* <AppLogo /> */}
        <AppHeader show={props.showHeader} app={props.appName} />

      </header>
      <div className='emp-container'>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EmployeeList />
          </div>
          <div className="col-md-6 col-sm-12">
            <EmployeeDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
