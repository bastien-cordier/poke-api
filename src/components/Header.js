import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar variant="dark" style={{ backgroundColor: "#F0524F" }}>
      <Navbar.Brand href="#home" style={{ marginLeft: "20px" }}>
        Pokédex
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Features</Nav.Link>
        <Nav.Link href="/">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
}
