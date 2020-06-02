import React, { Component } from 'react';
import './footer.css';
import Navbar from 'react-bootstrap/Navbar';

export default class Footer extends Component {
    render() {
        return (
            <Navbar>
                <div className='footer-content'>
                    <p>Created and designed by Dwayne Rivera</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/arrow">Arrow icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
                </div>
            </Navbar>
        )
    };
}