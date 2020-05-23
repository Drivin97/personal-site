import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './projects.css';

const content = [
    { title: 'New Paltz Job and Event Finder', description: 'Lorem ipsum' },
    { title: 'Personal Blog', description: 'Lorem ipsum' },
    { title: 'Personal Website', description: 'Lorem ipsum' }
];

export default class Projects extends Component {
    
    render() {
        return (
            <div className='projects'>
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