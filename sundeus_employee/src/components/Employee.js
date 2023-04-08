import React, { useState, useEffect } from "react";
import "./Employee.css";
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    id: "",
    first_Name: "",
    last_Name: "",
    designation: "",
    salary: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get(
      "https://localhost:7265/api/Employee/GetAllEmployees"
    );
    setEmployees(response.data);
  };
    

  const addEmployee = async (e) => {
    e.preventDefault();
    const emp = {
        first_Name: employee.first_Name,
        last_Name: employee.last_Name,
        designation: employee.designation,
        salary: employee.salary,
        email: employee.email,
        phone: employee.phone,
      };
    console.log(employee);
    await axios.post(
      "https://localhost:7265/api/Employee/Add_Employee",
      emp
    );
    fetchEmployees();
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    console.log(employee);
    await axios.put(
      `https://localhost:7265/api/Employee/Update_Employee/${employee.id}`,
      employee
    );
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await axios.delete(
      `https://localhost:7265/api/Employee/Delete_Employee/${id}`
    );
    fetchEmployees();
  };

  return (
    <>
      <div>
        <h1 className="title">Employee CRUD</h1>

        <form
          className="form"
          onSubmit={employee.id ? updateEmployee : addEmployee}
        >
          <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              name="First_Name"
              value={employee.first_Name}
              onChange={(e) =>
                setEmployee({ ...employee, first_Name: e.target.value })
              }
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="Last_Name"
              value={employee.last_Name}
              onChange={(e) =>
                setEmployee({ ...employee, last_Name: e.target.value })
              }
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={employee.designation}
              onChange={(e) =>
                setEmployee({ ...employee, designation: e.target.value })
              }
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="salary">Salary:</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={employee.phone}
              onChange={(e) =>
                setEmployee({ ...employee, phone: e.target.value })
              }
              className="form-control"
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              {employee.id ? "Update" : "Add"}
            </button>

            <button
              type="button"
              onClick={() =>
                setEmployee({
                  id: "",
                  first_Name: "",
                  last_Name: "",
                  designation: "",
                  salary: "",
                  email: "",
                  phone: "",
                })
              }
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>
                  {employee.first_Name} {employee.last_Name}
                </td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td className="form-buttons">
                  <button type="submit" onClick={() => setEmployee(employee)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employee;
