import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
    render() {
        return (
            <div className='about' id='about-page'>
                <h2 className='page-name'>About Me</h2>
                <p className='about-text'>
                    Welcome to my site! My name is Dwayne Rivera and I am an aspiring software engineer/web programmer in New York, NY.<br />
                    <br />
                    I like to spend my time creating web applications much like this site.
                    My current career goal is to work somewhere I can create or further develop web applications and sites.<br />
                    <br />
                    After graduating from SUNY New Paltz, I have spent much of my time learning new technologies such as Python,
                    as well as creating small websites.
                </p>
            </div>
        )
    }
}