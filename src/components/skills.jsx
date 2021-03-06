import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import './skills.css';

export default class Skills extends Component {
    render() {
        return (
            <div className='skills' id='skills-page'>
                <h1 className='page-name'>Skills</h1>
                <Container>
                    <Image src='./assets/java-logo.jpg' fluid/>
                    <Image src='./assets/react-logo.jpg' fluid/>
                    <Image src='./assets/web-logo.jpg' fluid/>
                </Container>
                <h1 className='page-name'>Learning</h1>
                <Container>
                    <Image src='./assets/PHP-Logo.jpg' fluid/>
                    <Image src='./assets/sql-logo.jpg' fluid/>
                    <Image src='./assets/Python-Logo.jpg' fluid/>
                </Container>
            </div>
        )
    };
}