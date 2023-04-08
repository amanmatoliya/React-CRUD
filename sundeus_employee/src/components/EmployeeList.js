import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ employees }) => {
  return (
    <div>
      <h1>Employee Management System</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.first_Name}</td>
              <td>{employee.last_Name}</td>
              <td>{employee.designation}</td>
              <td>{employee.salary}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/addEmployee">
        <button>Add Employee</button>
      </Link>
    </div>
  );
};

export default HomePage;
