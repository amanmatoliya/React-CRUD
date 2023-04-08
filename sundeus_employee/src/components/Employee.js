import React, { useState, useEffect } from "react";
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
    console.log(employee);
    await axios.post(
      "https://localhost:7265/api/Employee/Add_Employee",
      employee
    );
    fetchEmployees();
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://localhost:7265/api/Employee/Update_Employee/${employee.id}`,
      employee
    );
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`https://localhost:7265/api/Employee/Delete_Employee/${id}`);
    fetchEmployees();
  };

  return (
    <div class="container">
      <h1 class="title">Employee CRUD</h1>

      <form class="form" onSubmit={employee.id ? updateEmployee : addEmployee}>
        <div class="form-group">
          <label for="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="First_Name"
            value={employee.first_Name}
            onChange={(e) =>
              setEmployee({ ...employee, first_Name: e.target.value })
            }
            required
          />
        </div>

        <div class="form-group">
          <label for="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="Last_Name"
            value={employee.last_Name}
            onChange={(e) =>
              setEmployee({ ...employee, last_Name: e.target.value })
            }
            required
          />
        </div>

        <div class="form-group">
          <label for="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={employee.designation}
            onChange={(e) =>
              setEmployee({ ...employee, designation: e.target.value })
            }
            required
          />
        </div>

        <div class="form-group">
          <label for="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={employee.salary}
            onChange={(e) =>
              setEmployee({ ...employee, salary: e.target.value })
            }
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
            required
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={employee.phone}
            onChange={(e) =>
              setEmployee({ ...employee, phone: e.target.value })
            }
            required
          />
        </div>

        <div class="form-buttons">
          <button type="submit">{employee.id ? "Update" : "Add"}</button>
          <button
            type="button"
            onClick={() =>
              setEmployee({ id: "", name: "", designation: "", salary: "" })
            }
          >
            Cancel
          </button>
        </div>
      </form>

      <table class="table">
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
              <td class="table-buttons">
                <button type="button" onClick={() => setEmployee(employee)}>
                  Edit
                </button>
                <button
                  type="button"
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
  );
};

export default Employee;
