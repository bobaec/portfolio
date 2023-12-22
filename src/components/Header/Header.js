import React from "react";

const Header = ({title = "", description = "", socials = true}) => {
    return (
        <div className="header-container">
            <div className="header-title">{title}</div>
            <div className="header-description">{description}</div>
            {socials ? <div className="socials-container">
                ssss
            </div> : null}
        </div>
    )
}

export default Header;
