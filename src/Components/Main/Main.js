import React from "react";
import WhyUs from "./WhyUsSection/WhyUs";
import AboutSection from "./AboutSection/AboutSection/AboutSection";
import MenuSelection from "./MenuSection/MenuSelection";
import SpecialsSection from "./SpecialsSections/SpecialsSection";
const Main = () => {
    return(
        <div className = "Main" style = {{width: "100%", backgroundColor: "#1a1814"}} >
             <AboutSection />
             <WhyUs />
             <MenuSelection />
                <SpecialsSection />
        </div>
      
    )
}

export default Main