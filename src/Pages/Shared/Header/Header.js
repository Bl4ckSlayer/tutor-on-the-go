import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const Header = () => {
  return (
    <div>
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} height={50} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="home#services">Services</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                {/* {user ? (
                  <button onClick={handleSignOut}>Signout</button>
                ) : (
                  
                )} */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
