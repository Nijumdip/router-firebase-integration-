import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKZs1YNoZPeyaLeuKzrdePgFQfryMae9QvQ&usqp=CAU" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/orders">Orders</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
            <span className="displayName">{user?.displayName && user.displayName}</span>
            {
              user?.uid ? <Button onClick={handleSignOut} variant="outline-secondary">Sign Out</Button>
              :
              <CustomLink to="login">Login</CustomLink>  
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
