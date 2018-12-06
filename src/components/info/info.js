import React from 'react';
import './info.css';

const Info = (props) => {
    return <div className="infoBoard">
        <span className="infoTitle">{props.banner} </span> &nbsp;&nbsp;
        <a href={props.link}><i className={props.icon}></i>
        </a>



    </div>
};

export default Info;