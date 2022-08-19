import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

import { StaticImage } from "gatsby-plugin-image";
const logo = "../../images/misc/logo.png";

/*  TopBar is the navigation bar at the top of every page */

export default function ProjectBar(props) {
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
        <Navbar>
            <div className="projectNavContainer">
                <Nav className="projectBar-pages">
                    <Nav.Link href="/">Current</Nav.Link>
                    <Nav.Link href="/">Archive</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
}