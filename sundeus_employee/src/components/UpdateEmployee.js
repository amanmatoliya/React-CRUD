import React, { useState } from "react";

const UpdateEmployee = ({ employee, onUpdate }) => {
  const [formData, setFormData] = useState({
    first_Name: employee.first_Name,
    last_Name: employee.last_Name,
    designation: employee.designation,
    salary: employee.salary,
    email: employee.email,
    phone: employee.phone,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = { ...employee, ...formData };
    onUpdate(updatedEmployee);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="first_Name"
          value={formData.first_Name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          name="last_Name"
          value={formData.last_Name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="designation">Designation:</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateEmployee;
