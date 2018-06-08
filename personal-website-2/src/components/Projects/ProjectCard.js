import React, { Component } from 'react';

class ProjectCard extends Component {
    render() {
        return(
            <div className="card">
                <div className="img-circle">
                </div>
                <div className="tech-buttons">
                    <div className="tech-button">
                        <label>Java</label>
                    </div>
                    <div className="tech-button">
                        <label>Python</label>
                    </div>
                    <div className="tech-button">
                        <label>Javascript</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
