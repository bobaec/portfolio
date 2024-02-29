import React from "react";
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Header = ({ title = "", description = "", socials = true }) => {
    return (
        <div className="header-container">
            <div className="header-title">{title}</div>
            <div className="header-description">{description}</div>
            {socials ? <div className="socials-container">
                <a href="https://github.com/bobaec">
                    <FontAwesomeIcon icon={faGithub} inverse size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/bobaechoi/">
                    <FontAwesomeIcon icon={faLinkedin} inverse size="2x" />
                </a>
                <a href="https://www.instagram.com/bobaec_">
                    <FontAwesomeIcon icon={faInstagram} inverse size="2x" />
                </a>
            </div> : null}
        </div>
    )
}

export default Header;
