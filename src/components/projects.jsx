import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './projects.css';
import './slider-style.css';

const content = [
    { title: 'New Paltz Job and Event Finder', description: 'Contributed to the development of the New Paltz computer science department website using HTML, CSS, PHP, and MySQL. My main responsibilites focused around the front end, properly styling the webpage and making the information easily accessible to any who visited the site.' },
    { title: 'Personal Blog', description: 'Currently creating a personal blog site using React as my framework and MySQL as the database to store the blogs. Curently I have styled the majority of pages and am now creating the database. For styling I am using react bootstrap, a version of bootstrap 4 speifically for react, and the CSS grid layout' },
    { title: 'Personal Website', description: 'The website you see right here! Fully created by me using React and react-bootstrap as well as other npm packages. This site is meant to be minimal and display necessary information for those who want it. Hope you like it!' }
];

export default class Projects extends Component {
    
    render() {
        return (
            <div className='projects' id='projects-page'>
                <h1 className='page-name'>Projects</h1>
                <Slider className="slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                        >
                            <div className="inner">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    };
}