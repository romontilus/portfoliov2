import React from 'react';
import './header.css';
import profile from './Rommel1.jpg'

const Header = (props) => {
    return <header>
        
        <img className="profile" alt="Rommel C. Montilus" src={profile}></img>
        <h1>Rommel C. Montilus</h1>
        <p>Full-Stack Developer</p>
        <a  alt="Featured Apps"
            title="About"
            description= "Hey, I'm Rommel Montilus, a web developer based in New Jersey with an eccentric appreciation for basketball and gaming. I came across coding a bit later in life, but the bug finally caught me. Check out my Featured Apps above for some insight into what's going on in my head."
            onClick={() => props.handleClick(props)}>
            
            About
        </a>
        
           
    </header>
};

export default Header;