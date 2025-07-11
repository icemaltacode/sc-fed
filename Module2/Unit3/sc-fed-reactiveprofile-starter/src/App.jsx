import React, { Component } from 'react';
import './App.css';

class Bio extends Component {
    render() {
        return <div id="bio">
        {this.props.children}
        </div>
    }
}

class Link extends Component {
    render() {
        return <>
        <a href={this.props.url} target={'target' in this.props ? this.props.target : "_self" }>
        {this.props.text} 
        </a>
        {" "}
        { 'icon' in this.props ? this.props.icon : null } 
        </>
    }
}

class BioLinks extends Component {
    render() {
      return <p>
        <Link url="chat.html" text="Let's chat" icon="💬" />
        {" "}|{" "}  
        <Link url="mycv.pdf" target="_blank" text="View My CV" icon="👔" />
      </p>
    }
}

class SocialLink extends Component {
    render() {
      return <a href={this.props.url} rel="noreferrer" target="_blank">
        <img src={this.props.img} alt={this.props.imageAlt} />
      </a>
    }
}

class SocialBar extends Component {
    render() {
      return <div id="social_bar">
        <SocialLink href="//facebook.com" img="fb_icon.png" imageAlt="Facebook" />
        <SocialLink href="//instagram.com" img="insta_icon.png" imageAlt="Instagram" />
        <SocialLink href="//facebook.com" img="linkedin_icon.png" imageAlt="LinkedIn" />
      </div>
    }
}

class ColumnLeft extends Component {
    render() {
        return <div id="col_left">
        <header>Keith Vassallo</header>
        <Bio>
            <p>Hi! I'm Keith. I'm an Educator in coding<br/> &amp; technical subjects.
            I'm skilled in<br/> programming (Java, Python, PHP, C#,<br/> JavaScript...).
            I'm also handy with Linux, <br/>being certified by the Linux Professional<br/> Institute, 
            and also cloud technology,<br/> certified as an AWS Architect and<br /> Developer.</p>
            <BioLinks />
        </Bio>
        <SocialBar />
        </div>
    }
}

class ColumnRight extends Component {
    render() {
      return <div id="col_right">
        <div id="profile_image">
            <div id="badge_coder" />
            <div id="badge_geek" />
        </div>
      </div>
    }
}

class App extends Component {
    render() {
        return <div id="container">
            <ColumnLeft />
            <ColumnRight />
        </div>
    }
}
  
export default App;