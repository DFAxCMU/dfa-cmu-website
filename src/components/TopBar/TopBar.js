import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Socials from "../Socials/Socials";
import "./style.css";

import { StaticImage } from "gatsby-plugin-image";
const logo = "../../images/misc/logo.png";

/*  TopBar is the navigation bar at the top of every page */

export default function TopBar(props) {
    // Event listener to record the user's screen dimensions
    const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });

    useEffect(() => {
        function handleResize() {
            const { innerWidth: width, innerHeight: height } = window;
            setWindowDimensions({ width, height });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // State to keep track of whether the hamburger menu and the project
    // dropdown for mobile has been clicked
    const [menuClicked, setMenuClicked] = useState(false);  
    const [dropdownClicked, setDropdownClicked] = useState(false);  

    return (
        <div>
        { (windowDimensions.width > 996) ? 
            // if the screen is wide, use a classic nav bar
            <Navbar bg="light" expand="lg">
                <div className="top-bar-wide">
                    <a href="/">
                        <div className="logo">
                            <StaticImage src={ logo } alt="logo for Design for America at Carnegie Mellon" loading="eager" />
                        </div>
                    </a>
                    <div className="nav-pages">
                        <Nav>
                            <Nav.Link href="/">About</Nav.Link>
                            <NavDropdown title="Projects">
                                <NavDropdown.Item href="/current-projects">Current Projects</NavDropdown.Item>
                                <NavDropdown.Item href="/archived-projects">Archived Projects</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/schedule">Schedule</Nav.Link>
                            <Nav.Link href="https://www.impactcmu.com" target="_blank_">
                                ImpactCMU
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                                </svg>
                            </Nav.Link>
                        </Nav>
                    </div>
                    <Socials />
                </div>
            </Navbar>
            :
            // if the screen is narrow, use a hamburger icon that triggers a
            // fullscreen menu
            <div className="top-bar-mobile">
                <div className="top-bar-small">
                    <Socials />
                    <a href="/">
                        <div className="logo">
                            <StaticImage src={ logo } alt="logo for Design for America at Carnegie Mellon" loading="eager" />
                        </div>
                    </a>
                    <button className="menu-icon" type="button" onClick={ () => setMenuClicked((!menuClicked)) }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 20 20" className="hamburger" alt="navigation menu">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                </div>
                <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 20 20" onClick={() => setMenuClicked((!menuClicked))} className="nav-close" alt="close button">
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                    <div className="nav-vertical">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link onClick={() => setDropdownClicked((!dropdownClicked))}>
                            Projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" alt="dropdown arrow">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </Nav.Link>
                        <div className={dropdownClicked ? 'dropdown dropdown-small active' : 'dropdown dropdown-small'}>
                            <Nav.Link href="/current-projects">Current Projects</Nav.Link>
                            <Nav.Link href="/archived-projects">Archived Projects</Nav.Link>
                        </div>
                        <Nav.Link href="/schedule">Schedule</Nav.Link>
                        <Nav.Link href="https://www.impactcmu.com" target="_blank_">
                            ImpactCMU
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="25" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                            </svg>
                        </Nav.Link>
                    </div>
                </ul>
            </div>
        }
        </div>
    );
}