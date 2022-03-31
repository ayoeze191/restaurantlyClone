import React from "react";
import WhyUsDivs from "./WhyUsDivs/WhyUsDivs";
import "./WhyUs.css"


const WhyUs = () => {
    return (
        <div className = "WhyUs" id = "WhyUs">
            <div className = "WhyUsFirstDiv" data-aos = "fade-up">
        <h2>Why Us</h2>
        <p>Why Choose Our Restaurant</p>
        </div>

        <div className = "WhyUsSecondDiv" data-aos = "fade-up" data-aos-duration = "700">
        <WhyUsDivs />
        </div>

        </div>
    )
}
export default WhyUs 