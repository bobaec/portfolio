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
    return (
        <div className="info-card-container">
            <img className="image-container" src={image} alt="cloudarmy logo"/>
            <div className="text-container">
                <div className="title">{title}</div>
                <div className="duration">{duration}</div>
                <div className="job-title">{jobTitle}</div>
                <div className="description">{description}</div>
                {/* <div className="links">{links}</div> */}
            </div>
        </div>
    );
}

export default InfoCard;
