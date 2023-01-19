import React from 'react';
import './Sports.css';

const Sports = (props) => {
    const { title, urlToImage, url, source } = props.sport;
    const sourceName = source.name;

    return (
        <div className='content'>
            <div className="img-area">
                <img src={urlToImage} alt="" />
            </div>
            <div className="title-area">
                <h4><a href={url} target=" ">{title}</a></h4>
                <small>Source : {sourceName}</small>
            </div>
        </div>
    );
};

export default Sports;