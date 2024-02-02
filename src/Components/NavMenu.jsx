import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Styles/components.scss"
import Resume from "../"


import React, { forwardRef, useRef } from "react";



const NavMenu = ({ resultRef, projectRef, emailRef }) => {
    const clickHandler = (e) => {
        e.preventDefault();
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const projectClickHandler = (e) => {
        e.preventDefault();
        projectRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const emailClickHandler = (e) => {
        e.preventDefault();
        emailRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={clickHandler}>Projects</Nav.Link>
                        <Nav.Link href="" target="_blank" onClick={projectClickHandler}>Skills</Nav.Link>
                        <Nav.Link href={require("../Resume.pdf")} target="_blank">Resume</Nav.Link>
                        <Nav.Link href="#link" onClick={emailClickHandler}>Contact</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavMenu;