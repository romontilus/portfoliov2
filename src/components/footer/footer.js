import React from 'react';
import './footer.css';

const Footer = () => {
    return <footer>
        <strong>Contact:</strong>
        <a className="smLink"href="mailto:romontilus@gmail.com"><i id="gmail" className="fas fa-envelope"></i></a>
        <a className="smLink" href="https://www.linkedin.com/in/romontilus/"><i id="linkedIn" className="fab fa-linkedin"></i></a>
        <a className="smLink"href="https://github.com/romontilus"><i id="github" className="fab fa-github"></i></a>
        <a className="smLink"href="https://twitter.com/romontilus"><i id="twitter" className="fab fa-twitter"></i></a>    </footer>
};

export default Footer;