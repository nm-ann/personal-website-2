import React, { Component } from 'react';
import Console from './Console';
import AboutInfo from './AboutInfo';

class About extends Component {
    render() {
        return(
            <div className="about">
                <label>I'm a Software Developer with experience in Java, Python, Javascript, HTML, and CSS.</label>
                <div className="about-content">
                    <Console />
                    <AboutInfo />
                </div>
            </div>
        );
    }
}

export default About;
