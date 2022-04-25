import {useEffect,useState} from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

export const EmployeeList = () => {
    const [Employee,setEmployee]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/employee").then(({data})=>{
      setEmployee(data)
        })
    },[]);
    return (
      <div className="list_container">
         <div className="employee_card">{Employee.map((employee)=>(
<div  key={employee.id}>
   <Link to={`/employees/${employee.id}`}>
   <img src={employee.image} className="employee_image" alt="" />
   <div className="employee_name">{employee.employee_name}</div>
   <div className="employee_title">{employee.title}</div>
   </Link>
</div>
    ))}
    </div>
      </div>
    );
  };