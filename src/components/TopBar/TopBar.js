import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Socials from "../Socials/Socials";
import "./style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopBar(props) {
    return (
        <Navbar expand="lg">
            <div className="top-bar">
                <a href="/">
                    <div className="logo">

                    </div>
                </a>

                <div className="nav-pages">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">About</Nav.Link>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/current-projects">Current Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/archived-projects">Archived Projects</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/schedule">Schedule</Nav.Link>
                        <Nav.Link href="https://www.impactcmu.com" target="_blank_">ImpactCMU</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
                <Socials />

            </div>
        </Navbar>

    // <Navbar bg="light" expand="lg">
    // <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //         </NavDropdown>
    //     </Nav>
    //     </Navbar.Collapse>
    // </Container>
    // </Navbar>
    );
}