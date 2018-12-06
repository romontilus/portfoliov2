import React from "react";
import "./portfolioCard.css";


const portfolioCard = props => (
    <div 
        role="img"
        className="MBS"
        aria-label="click item">
            <img 
                onClick={() => props.handleClick(props)} 
                // onClick={() => console.log(props)}
                className="img-fluid"
                src={props.image} 
                alt={props.id}  
                 onMouseOver={e => (e.currentTarget.src = props.alt)}
                 onMouseOut={e => (e.currentTarget.src = props.image)}          
             
                 
         />
    </div>
);

export default portfolioCard;
