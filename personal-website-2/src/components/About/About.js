import React, { Component } from 'react';
import Console from './Console';

class About extends Component {
    render() {
        return(
            <div className="about">
                <label className="about-title">About</label>
                <div className="about-content">
                    <Console />
                    <div className="about-info">
                        <p>I'm an NYC based computer science student, software developer, and designer, with experience in Java, Python, and Javascript.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
