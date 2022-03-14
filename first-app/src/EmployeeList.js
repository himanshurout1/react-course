import './App.css';

function EmployeeList(props) {
    const employees = props.employees || [];
    return (
        <div>
            <div>Number of employees: {employees.length}</div>
            <div>
                {
                    employees.map((emp, i) =>
                        <div key={"emp" + i.toString()} className="emp-row">
                            <div>{emp.name}</div>
                            <div>{emp.email}</div>
                            <div>{emp.address}</div>
                            <div>{emp.city}</div>
                            <div>{emp.accType}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default EmployeeList;