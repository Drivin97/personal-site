import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup'
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Image src='./assets/itsme.png' fluid></Image>
                <ListGroup variant="flush">
                    <ListGroup.Item>New Paltz Alumn</ListGroup.Item>
                    <ListGroup.Item>Aspiring Software Engineer</ListGroup.Item>
                    <ListGroup.Item>Determined</ListGroup.Item>
                    <ListGroup.Item>Passionate</ListGroup.Item>
                </ListGroup>
            </div>
        )
    };
}