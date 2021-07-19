import React from "react";
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
    );
}