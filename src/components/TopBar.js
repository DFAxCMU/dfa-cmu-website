import React from "react";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function TopBar(props) {
    return (
        <div className="top-bar">
            <p>DFA x CMU LOGO</p>
            <NavBar bg="light" variant="light">
                <NavBar.Brand href="/">Design for America</NavBar.Brand>
                <NavBar.Toggle aria-controls="navbar-nav" />
                <NavBar.Collapse id="navbar-nav">
                    <Nav>
                        <Nav.Link href="/">About</Nav.Link>
                        <NavDropdown title="Projects" id="projects-dropdown">
                            <NavDropdown.Item href="/current-projects">Current Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/archived-projects">Archived Projects</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/schedule">Schedule</Nav.Link>
                        <Nav.Link href="https://www.impactcmu.com">ImpactCMU</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>
        </div>
    );
}