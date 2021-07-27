import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg" text-center>
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="navbar__link" to="/posts">
                What's Chillin'?
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <ul className="navbar">
    //   <li className="navbar__item active">
    //     <Link className="navbar__link" to="/posts">
    //       What's Chillin'? -- Home / Posts
    //     </Link>
    //   </li>
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/foodItems">
    //       Food
    //     </Link>
    //   </li>
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/foodCategories">
    //       Food Categories
    //     </Link>
    //   </li>
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/users">
    //       Your Fam
    //     </Link>
    //   </li>
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/storageAreas">
    //       Storage Areas
    //     </Link>
    //   </li>
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/homes">
    //       Your Home
    //     </Link>
    //   </li>
    // </ul>
  );
};
