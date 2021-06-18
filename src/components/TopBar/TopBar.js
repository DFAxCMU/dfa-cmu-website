import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Socials from "../Socials/Socials";
import "./style.css";

export default function TopBar(props) {
    return (
        <div className="top-bar">
            <a href="/">
                <div className="logo">

                </div>
                <div className="nav-bar">
                <Nav>
                    <Nav.Link href="/">About</Nav.Link>
                    <NavDropdown title="Projects" id="projects-dropdown">
                        <NavDropdown.Item href="/current-projects">Current Projects</NavDropdown.Item>
                        <NavDropdown.Item href="/archived-projects">Archived Projects</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                    <Nav.Link href="https://www.impactcmu.com" target="_blank_">ImpactCMU</Nav.Link>
                </Nav>
                <Socials />
                </div>
            </a>
        </div>
    );
}
/*
            <NavBar bg="light" variant="light">
            </NavBar>
            */