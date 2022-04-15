import React from "react";
import './WhyUsDiv.css'


const WhyUsDiv = (props) => {
    return (
        <div className = "WhyUsDiv" data-aos = "zoom-in" data-aos-duration = {props.index == 0?"100":props.index == 1?"200":props.index == 2?"300":null}>
            <div className = "no">{props.no}</div>
            <div className = "h">{props.title}</div>
            <div className = "p">{props.text}</div>
        </div>
    )
}

export default WhyUsDiv