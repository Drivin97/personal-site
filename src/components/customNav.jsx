import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './customNav.css';

export default class customNav extends Component {
    render() {
        return (
            <Navbar sticky='top' collapseOnSelect expand='md'>
                <Navbar.Brand>DWAYNE RIVERA</Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link eventKey={1} to='/'>ABOUT</Nav.Link>
                        <Nav.Link eventKey={2} to='/'>RESUME</Nav.Link>
                        <Nav.Link eventKey={3} to='/'>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}