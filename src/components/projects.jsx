import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './projects.css';
import './slider-style.css';

const content = [
    { 
        title: 'New Paltz Job and Event Finder', 
        description: 'Contributed to the development of the New Paltz computer science department website using HTML, CSS, PHP, and MySQL. My main responsibilites focused around the front end, properly styling the webpage and making the information easily accessible to any who visited the site.',
        link: 'http://cs.newpaltz.edu/p/f17-02/userpage.php',
        linkText: 'The Site' 
    },
    { 
        title: 'Personal Blog', 
        description: 'Currently creating a personal blog site using React as my framework and MySQL as the database to store the blogs. Curently I have styled the majority of pages and am now creating the database. For styling I am using react bootstrap, a version of bootstrap 4 speifically for react, and the CSS grid layout',
        link: 'https://github.com/Drivin97/phoebes-site',
        linkText: 'Github Repo' 
    },
    { 
        title: 'Personal Website', 
        description: 'The website you see right here! Fully created by me using React and react-bootstrap as well as other npm packages. This site is meant to be minimal and display necessary information for those who want it. Hope you like it!',
        link: 'https://github.com/Drivin97/personal-site',
        linkText: 'Github Repo' 
    },
    {
        title: 'Weather App',
        description: 'Created a weather app web application using HTML, CSS, and vanilla JavaScript. By using the Open Weather Map API, information based on city is requested and shown to the user.',
        link: 'https://github.com/Drivin97/weather-app',
        linkTest: 'Github Repo'
    }

];

export default class Projects extends Component {
    
    render() {
        return (
            <div className='projects' id='projects-page'>
                <h1 className='page-name'>Projects</h1>
                {/* Beginning of projects slide */}
                <Slider className="slider-wrapper" autoplay={2000}>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                        >
                            <div className="inner">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <a className="project-link" target="_blank" rel="noopener noreferrer" href={item.link}>{item.linkText}</a>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        )
    };
}