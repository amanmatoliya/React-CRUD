import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table, Modal, Button} from "react-bootstrap";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (employee) => {
    setShow(true);
    setEmployee(employee);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get(
      "https://localhost:7265/api/Employee/GetAllEmployees"
    );
    setEmployees(response.data);
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    console.log(employee);
    await axios.put(
      `https://localhost:7265/api/Employee/Update_Employee/${employee.id}`,
      employee
    );
    fetchEmployees();
    setShow(false);
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
        {/* <Col className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Add New Employee
          </Button>
        </Col> */}
        <br/>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {/* {employee.id ? "Update Employee" : "Add Employee"} */}
              Update Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="submit"
              variant="success"
              // onClick={employee.id ? updateEmployee : addEmployee}
              onClick={updateEmployee}
            >
              {employee.id ? "Update" : "Add"}
            </Button>
          </Modal.Footer>
        </Modal>
        
        <Table striped bordered hover>
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
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleShow(employee)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Employee;
