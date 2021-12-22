import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar variant="dark" style={{ backgroundColor: "#F0524F" }}>
      <Navbar.Brand href="/" style={{ marginLeft: "20px" }}>
        <img src="assets/loader.png" alt="logo" style={{ maxWidth: "20px" }} /> MyPokedex
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Mes pokémons</Nav.Link>
        <Nav.Link href="/">Pokémons par types</Nav.Link>
      </Nav>
    </Navbar>
  );
}
