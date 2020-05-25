import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import './skills.css';

export default class Skills extends Component {
    render() {
        return (
            <div className='skills'>
                <h1 className='page-name'>Skills</h1>
                    <Container>
                        <Image src='./assets/java-logo.jpg' />
                        <Image src='./assets/react-logo.jpg' />
                        <Image src='./assets/web-logo.jpg' />
                    </Container>
            </div>
        )
    };
}