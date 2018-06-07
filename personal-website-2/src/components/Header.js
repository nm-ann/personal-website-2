import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header-title">
                    Noam Annenberg
                </div>
                <div className="nav-links">
                    <a href="#" className="nav-link nav-link-about">About</a>
                    <a href="#" className="nav-link nav-link-projects">Projects</a>
                    <a href="#" className="nav-link nav-link-resume">Resume</a>
                </div>
            </div>
        );
    }
}

export default Header;
