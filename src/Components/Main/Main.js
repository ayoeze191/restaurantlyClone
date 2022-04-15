import React from "react";
import WhyUs from "./WhyUsSection/WhyUs";
import AboutSection from "./AboutSection/AboutSection/AboutSection";
import MenuSelection from "./MenuSection/MenuSelection";
import SpecialsSection from "./SpecialsSections/SpecialsSection";
import Event from "./Event/Event";
import { BookATableSection } from "./BookATableSections/BookATableSection";

const Main = () => {
    return(
        <div className = "Main" style = {{width: "100%", backgroundColor: "", }} >
             <AboutSection />
             <WhyUs />
             <MenuSelection />
                <SpecialsSection />

                <Event />
                <BookATableSection />
          
        </div>
    )
}

export default Main