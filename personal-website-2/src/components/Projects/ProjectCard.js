import React, { Component } from 'react';

class ProjectCard extends Component {
    render() {
        return(
            <div className="card">
                <img src={this.props.pic} alt="project card"/>
            </div>
        );
    }
}

export default ProjectCard;
