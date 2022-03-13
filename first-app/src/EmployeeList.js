import './App.css';

function EmployeeList() {
    const employees = [
        { id: "emp1", name: "Sakthi", dept: "Front End" },
        { id: "emp2", name: "Sakthi", dept: "Front End" },
        { id: "emp3", name: "Sushma", dept: "Front End" },
        { id: "emp4", name: "Greeshma", dept: "Front End" },
        { id: "emp5", name: "Prashant", dept: "Front End" },
        { id: "emp6", name: "Anto", dept: "Front End" }
    ];
    return (
        <div>
            <div>Number of employees: {employees.length}</div>
            <div>
                {
                    employees.map((emp,i) =>
                        <div key={"emp" + i.toString()} className="emp-row">
                            <div>{emp.name}</div>
                            <div>{emp.dept}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default EmployeeList;