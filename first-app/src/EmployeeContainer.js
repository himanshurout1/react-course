
import { useState } from 'react';
import EmployeeDetails from './EmployeeDetails';
import EmployeeList from './EmployeeList';




function EmployeeContainer(props) {

    const [empObjList, setEmpObjList] = useState([]);
    const [editEmpObj, setEditEmpObj] = useState({});


    function updateEmpList(newList) {
        console.log("***", newList);
        setEmpObjList(newList);
    }

    function onEmpEdit(editObj) {
        console.log("Emp object for edit", editObj);
        setEditEmpObj(editObj);
    }

    return (

        <div className='emp-container'>
            <div className="row">
                <div className="col-md-6 col-sm-12 left-section">
                    <EmployeeList employees={empObjList} onEmployeeEdit={onEmpEdit} />
                </div>
                <div className="col-md-6 col-sm-12 right-section">
                    <EmployeeDetails onEmployeeListChange={updateEmpList} editObj={editEmpObj} />
                </div>
            </div>
        </div>

    );
}

export default EmployeeContainer;
