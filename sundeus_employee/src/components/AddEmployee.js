import React, { useState } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    first_Name: "",
    last_Name: "",
    designation: "",
    salary: "",
    email: "",
    phone: ""
  });

  const addEmployee = (e) => {
    e.preventDefault();
    // Add code to submit employee data to backend
    console.log(employee);
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={addEmployee}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={employee.first_Name}
            onChange={(e) =>
              setEmployee({ ...employee, first_Name: e.target.value })
            }
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={employee.last_Name}
            onChange={(e) =>
              setEmployee({ ...employee, last_Name: e.target.value })
            }
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            value={employee.designation}
            onChange={(e) =>
              setEmployee({ ...employee, designation: e.target.value })
            }
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            value={employee.salary}
            onChange={(e) =>
              setEmployee({ ...employee, salary: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={employee.email}
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={employee.phone}
            onChange={(e) =>
              setEmployee({ ...employee, phone: e.target.value })
            }
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
