import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Socials from "../Socials/Socials";
import "./style.css";

import { StaticImage } from "gatsby-plugin-image";
const logo = "../../images/misc/logo.png";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function TopBar(props) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [clicked, handleClick] = useState(false);  
    const [dropdown, handleDropdown] = useState(false);  

    // handleClick(() => {
    //     this.setState(state => ({
    //       clicked: !state.clicked
    //     }));
    // })

    return (
        <div>
        { (windowDimensions.width > 996) ? 
        (   <Navbar bg="light" expand="lg">
            <div className="top-bar">
                <a href="/">
                    <div className="logo">
                        <StaticImage src={ logo } alt="logo for Design for America at Carnegie Mellon" loading="eager" />
                    </div>
                </a>
                <div className="nav-pages">
                    <Nav>
                        <Nav.Link href="/">About</Nav.Link>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/current-projects">Current Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/archived-projects">Archived Projects</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/schedule">Schedule</Nav.Link>
                        <Nav.Link href="https://www.impactcmu.com" target="_blank_">ImpactCMU</Nav.Link>
                    </Nav>
                </div>
                <Socials />
            </div>
            </Navbar>)  
        :
        (<div className="top-bar-condensed">
            <div className="top-bar-small">
                <Socials />
                <a href="/">
                    <div className="logo-small">
                        <StaticImage src={ logo } alt="" loading="eager" />
                    </div>
                </a>
                <button className="menu-icon" type="button" onClick={() => handleClick((!clicked))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 20 20" className="hamburger" alt="navigation menu">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 20 20" onClick={() => handleClick((!clicked))} className="nav-close" alt="close button">
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                </svg>
                <div className="nav-vertical">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link onClick={() => handleDropdown((!dropdown))}>
                        Projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" alt="dropdown arrow">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </Nav.Link>
                        <div className={dropdown ? 'dropdown dropdown-small active' : 'dropdown dropdown-small'}>
                            <Nav.Link href="/current-projects">Current Projects</Nav.Link>
                            <Nav.Link href="/archived-projects">Archived Projects</Nav.Link>
                        </div>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                    <Nav.Link href="https://www.impactcmu.com" target="_blank_">ImpactCMU</Nav.Link>
                </div>
            </ul>
        </div>
        ) }
    </div>
    );
}

// constructor(props) {
//     super(props);
//     this.state = {showWarning: true};
//     this.handleClick = this.handleClick.bind(this);
// }

//old navbar
/* <Navbar expand="lg">
            <div className="top-bar">
                <a href="/">
                    <div className="logo">
                        <StaticImage src={ logo } alt="" loading="eager" />
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
        </Navbar>) */