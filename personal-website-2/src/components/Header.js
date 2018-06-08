import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: 'rgba(0, 0, 0, ',
            backgroundAlpha: 0
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.setState({
              backgroundAlpha: 0.3
            });
          } else if (window.scrollY < 50) {
            this.setState({
              backgroundAlpha: 0
            });
          }
    }

    render() {
        return(
            <div className="header" style={{background: this.state.backgroundColor + this.state.backgroundAlpha + ')'}}>
                <label className="header-title">Noam Annenberg</label>
                <div className="nav-links" ref="navLinks" style={{position: this.state.scrollingLock ? "fixed" : "relative"}}>
                    <a href="#" className="nav-link nav-link-about">About</a>
                    <a href="#" className="nav-link nav-link-projects">Projects</a>
                    <a href="#" className="nav-link nav-link-resume">Resume</a>
                </div>
            </div>
        );
    }
}

export default Header;
