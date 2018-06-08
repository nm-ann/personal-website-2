import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            scrollingLock: false
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 50) {
            console.log("should lock");
            this.setState({
              scrollingLock: true
            });
          } else if (window.scrollY < 50) {
            console.log("not locked" );
            this.setState({
              scrollingLock: false
            });
          }
    }

    render() {
        return(
            <div className="header">
                <div className="header-title" style={{visibility: this.state.scrollingLock ? "hidden" : "visible"}}>
                    Noam Annenberg
                </div>
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
