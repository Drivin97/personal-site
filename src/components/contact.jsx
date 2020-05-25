import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <h1 className='page-name'>Contact</h1>
                <p className='contact-text'>
                    Want to get in touch? Feel free to, as I am currently looking for new opportunities.
                    You can also check my Github and LinkedIn.
                </p>
                {/* <Button variant="outline-dark">Email</Button> */}
                <a><FontAwesomeIcon className='email fa-fw' icon={faEnvelope} size='lg'></FontAwesomeIcon></a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/Drivin97'><FontAwesomeIcon className='github fa-fw' icon={faGithub} size='lg'></FontAwesomeIcon></a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/dwaynerivera'><FontAwesomeIcon className='linkedin fa-fw' icon={faLinkedin} size='lg'></FontAwesomeIcon></a>
            </div>
        )
    }
}