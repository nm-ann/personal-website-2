import React, { Component } from 'react';

class Console extends Component {
    constructor() {
        super();
        this.state = {
            headerColor: '#333f56',
            headerTextColor: 'white',
            backgroundColor: 'white',
            BodyTitlesTextColor: 'black',
            BodyContentTextColor: '#333f56',
            footerColor: '#333f56',
            footerIconsColor: 'white'
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        var name = e.target.name;
        if(e.key === 'Enter') {
            this.setState({[e.target.name]: e.target.value}, 
                function() {
                    switch(name) {
                        case 'headerColor':
                            document.querySelector('.header').style.background = this.state[name];
                            break;
                        case 'headerTextColor':
                            document.querySelector('.header-title').style.color = this.state[name];
                            //changing these is a big more complicated because the before and hover classes
                            /*/document.querySelector('.nav-link-hover').style.color = this.state[name];
                            document.querySelector('.nav-link-before').style.color = this.state[name];
                            document.querySelector('.active-link').style.color = this.state[name];/*/
                            break;
                        case 'backgroundColor':
                            document.querySelector('.about').style.background = this.state[name];
                            break;
                        case 'bodyTitlesTextColor':
                            document.querySelector('.about-info').style.color = this.state[name];
                            break;
                        case 'bodyContentTextColor':
                            document.querySelector('.about label').style.color = this.state[name];
                            let labels = Array.from(document.querySelectorAll('.about-info label'));
                            labels.forEach(label => {
                                label.style.color = this.state[name];
                            });
                            break;
                        case 'footerColor':
                            document.querySelector('.footer').style.background = this.state[name];
                            break;
                        case 'footerIconsColor':
                            let icons = Array.from(document.querySelectorAll('.social-links i'));
                            icons.forEach(icon => {
                                icon.style.color = this.state[name];
                            });
                            break;
                        default:
                            break;
                    }
                }
            );
        }
    }

    render() {
        return(
            <div className="about-console">
                <div className="about-console-title">
                    <label>Website Editor</label>
                </div>
                <div className="about-console-body">
                    <div className="about-console-text">
                        <form>
                            <label>> Header.color = </label>
                            <input type="text" placeholder="#333f56" name="headerColor" onKeyPress={this.handleKeyPress} /><br/><br/>
                            <label>> Header.text.color = </label> 
                            <input type="text" placeholder="white" name="headerTextColor" onKeyPress={this.handleKeyPress} /><br/><br/>
                            <label>> Background.color = </label> 
                            <input type="text" placeholder="white" name="backgroundColor" onKeyPress={this.handleKeyPress} /><br/><br/>
                            <label>> Body.titles.text.color = </label> 
                            <input type="text" placeholder="black" name="bodyTitlesTextColor" onKeyPress={this.handleKeyPress} /><br/><br/>
                            <label>> Body.content.text.color = </label> 
                            <input type="text" placeholder="#333f56" name="bodyContentTextColor" onKeyPress={this.handleKeyPress} /><br/><br/>
                            <label>> Footer.color = </label> 
                            <input type="text" placeholder="#333f56" name="footerColor" onKeyPress={this.handleKeyPress} /><br/><br/>
                            <label>> Footer.icons.color = </label> 
                            <input type="text" placeholder="white" name="footerIconsColor" onKeyPress={this.handleKeyPress} /><br/><br/>
                        </form>
                        <label>> _</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Console;