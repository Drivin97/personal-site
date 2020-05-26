import React, { Component } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact' id='contact-page'>
                
                <h1 className='page-name'>Contact</h1>

                <p className='contact-text'>
                    Want to get in touch? Feel free to, as I am currently looking for new opportunities.
                    You can also check my Github and LinkedIn.
                </p>

                <a target='_blank' rel='noopener noreferrer' href='mailto:driv91197@gmail.com'>
                    <span title='Email me'><FontAwesomeIcon className='email fa-fw' icon={faEnvelope} size='lg'></FontAwesomeIcon></span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/Drivin97'>
                    <span title='My Github'><FontAwesomeIcon className='github fa-fw' icon={faGithub} size='lg'></FontAwesomeIcon></span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/dwaynerivera'>
                    <span title='My LinkedIn'><FontAwesomeIcon className='linkedin fa-fw' icon={faLinkedin} size='lg'></FontAwesomeIcon></span>
                </a>

            </div>
        )
    };
}