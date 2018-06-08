import React, { Component } from 'react';
import Console from './Console';

class About extends Component {
    render() {
        return(
            <div className="about">
                <label className="about-title">Noam Annenberg</label>
                <label className="about-subtitle">Student | Software Developer | Designer</label>
                <div className="about-content">
                    <Console />
                    <div className="about-info">
                        <p>My name is Noam and I'm a software developer based in New York City. I'm currently studying computer science at Yeshiva University. Insert something about editing website</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
