import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './customNav.css';

export default class customNav extends Component {
    render() {
        return (
            <Navbar sticky='top' collapseOnSelect expand='md'>
                <Nav.Link href='#home-page'><Navbar.Brand>DWAYNE RIVERA</Navbar.Brand></Nav.Link>
                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link eventKey={1} href='#about-page'>ABOUT</Nav.Link>
                        <Nav.Link eventKey={2} href='#projects-page'>PROJECTS</Nav.Link>
                        <Nav.Link eventKey={3} href='#skills-page'>SKILLS</Nav.Link>
                        <Nav.Link eventKey={4} href='#contact-page'>CONTACT</Nav.Link>
                        <Nav.Link eventKey={5} href='/assets/Dwayne Rivera Resume.pdf' target="_blank" rel="noopener noreferrer">RESUME</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}