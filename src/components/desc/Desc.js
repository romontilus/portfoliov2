import React from "react";
import "./Desc.css";

const Desc = props => (
    <div 
        role="img"
        className="Desc"
        aria-label="click item">
           <p className="descText"> {props.desc}
           </p>
    </div>
);

export default Desc;
