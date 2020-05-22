import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
//import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Jumbotron>
                    <p>Hi, my name's</p>
                    <h1 className='hi'>Dwayne Rivera</h1>
                    <p>An aspiring software engineer based in New York, NY</p>
                </Jumbotron>
                <Image src='./assets/itsme.png'></Image>
                {/* <ListGroup variant="flush">
                    <ListGroup.Item>New Paltz Alumn</ListGroup.Item>
                    <ListGroup.Item>Aspiring Software Engineer</ListGroup.Item>
                    <ListGroup.Item>Determined</ListGroup.Item>
                    <ListGroup.Item>Passionate</ListGroup.Item>
                </ListGroup> */}

            </div>
        )
    };
}