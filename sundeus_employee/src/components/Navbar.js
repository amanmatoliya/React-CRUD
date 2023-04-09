import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <>      
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="/">Employees</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add">Add Employee</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
