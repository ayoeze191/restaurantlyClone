import React from "react";
import WhyUsDivs from "./WhyUsDivs/WhyUsDivs";
import "./WhyUs.css"


const WhyUs = () => {
    return (
        <div className = "WhyUs" id = "WhyUs">
            <div className = "WhyUsFirstDiv">
        <h2>Why Us</h2>
        <p>Why Choose Our Restaurant</p>
        </div>

        <div className = "WhyUsSecondDiv">
        <WhyUsDivs />
        </div>

        </div>
    )
}
export default WhyUs