import React from 'react';
import { Employee, PropsEmp } from './employee.model';


function Employees(props: PropsEmp) {
    const employees: Employee[] = props.list || [];
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
                            <div>
                                <button type='button'>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Employees;