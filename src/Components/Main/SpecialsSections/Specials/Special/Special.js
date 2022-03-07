import React from "react";
import './Special.css';

const Special = (props) => {
    return(
        <div className = "Special"> 
        <div className = "Special-img">
            <img src = {props.image} />
        </div>
        

        <div className = "Specials-Secondiv">
        <h1 className = "Special-Topic">
            {props.Topic}
        </h1>
        <div className = "Special-Description">
            <div>{props.description1}</div>
            <div>{props.description2}</div>
        </div>
        </div>
        </div>

    )
}






export default Special