import React from 'react';
import Consultants from './Consulntants';
import { Employee } from './employee.model';
import Employees from './Employees';
import EmpWithSearch from './EmpWithSearch';
import ListSearch from './ListSearchHoc';

function HocContainer() {
  const emps: Employee[] = [
    {name: "Anto", email: "emp1@gmial.com", city: "Chennai"},
    {name: "Sakthi", email: "emp2@gmial.com", city: "Mumbai"},
    {name: "Sushma", email: "emp2@gmial.com", city: "Mumbai"},
    {name: "Prashant", email: "emp2@gmial.com", city: "Mumbai"},
    {name: "Greeshma", email: "emp2@gmial.com", city: "Mumbai"}
  ];

  const ConsultantWithSearch = ListSearch(Consultants);
  const EmployeetWithSearch = ListSearch(Employees);
  return (
    <div>
      <EmployeetWithSearch list={emps} />
      <hr/>
      <ConsultantWithSearch list={emps} />
    </div>
  );
}

export default HocContainer;
