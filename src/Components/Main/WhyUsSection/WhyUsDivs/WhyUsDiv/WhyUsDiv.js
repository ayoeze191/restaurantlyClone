import React from "react";
import './WhyUsDiv.css'


const WhyUsDiv = (props) => {
    return (
        <div className = "WhyUsDiv">
            <div className = "no">{props.no}</div>
            <div className = "h">{props.title}</div>
            <div className = "p">{props.text}</div>
        </div>
    )
}

export default WhyUsDiv