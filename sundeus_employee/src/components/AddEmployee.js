import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    first_Name: "",
    last_Name: "",
    designation: "",
    salary: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const addEmployee = () => {
    const emp = {
      first_Name: employee.first_Name,
      last_Name: employee.last_Name,
      designation: employee.designation,
      salary: employee.salary,
      email: employee.email,
      phone: employee.phone,
    };
    axios
      .post(`https://localhost:7265/api/Employee/Add_Employee`, emp)
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <Card style={{ width: "50rem", marginLeft: "10rem" }}>
        <Card.Body>
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
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button onClick={addEmployee}>Submit</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default AddEmployee;
