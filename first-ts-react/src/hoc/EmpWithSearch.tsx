import React, { useEffect, useState } from 'react';
import { Employee } from './employee.model';
import Employees from './Employees';

function EmpWithSearch(props: any) {
    const emps:Employee[] = props.employees;
    const [filterText, setFilterText] = useState("");
    const [filteredEmps, setFilteredEmps] = useState(emps);

    useEffect(()=>{
        const newList = emps.filter(emp => {
            return emp.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        });
        setFilteredEmps(newList);
    }, [filterText]);

    function onFilterChange(event: any) {
        setFilterText(event.target.value);
    }

    return (
        <div>
            <div>
                <input type="text" value={filterText} onChange={onFilterChange} />
            </div>
            <Employees list={filteredEmps} />
        </div>
    );
}

export default EmpWithSearch;
