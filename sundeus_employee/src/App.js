import React from "react";
import Employee from "./components/Employee";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
