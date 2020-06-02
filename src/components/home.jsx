import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='home' id='home-page'>
                <Jumbotron>
                    <p>Hi, my name's</p>
                    <h1 className='hi'>Dwayne Rivera</h1>
                    <p>An aspiring software engineer based in New York, NY</p>
                </Jumbotron>
                <div>
                    <Image className='me' src='./assets/me.jpg' fluid/>
                </div>
            </div>
        )
    };
}