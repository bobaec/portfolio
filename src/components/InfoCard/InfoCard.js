import React from 'react';
import './InfoCard.scss';

const InfoCard = ({info = {}}) => {
    const {
        image,
        title,
        duration,
        jobTitle,
        description,
        links,
    } = info;

    const colorURL = (label) => {
        let color;
        switch (label) {
            case 'WEBSITE':
                color = 'orange';
                break;
            case 'GITHUB':
                color = 'crimson';
                break;
            case 'DEMO':
                color = 'cornflowerblue';
                break;
            default:
                color = 'gray';
                break;
        }
        return color;
    };

    return (
        <div className="info-card-container">
            <div className="info-card-shadow-wrapper">
                <img className="image-container" src={image} alt="cloudarmy logo"/>
                <div className="text-container">
                    <div className="title">{title}</div>
                    <div className="duration">{duration}</div>
                    <div className="job-title">{jobTitle}</div>
                    <div className="description">{description}</div>
                    {links?.length ? <div className="url-container">
                        {links.map((link, index) => {
                            return <a className="url" key={index} href={link.url} style={{color: colorURL(link.label)}}>{link.label}</a>
                        })}
                    </div> : null}
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
