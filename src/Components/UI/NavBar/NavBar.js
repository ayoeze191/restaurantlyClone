import React, { useEffect, useRef, useState } from "react";
import RestaurantName from "../RestaurantName/RestaurantName";
import nav from '../../../assets/nav.svg'
import NavItemsDesktop from "./NavItems/NavItemsDesktop/NavItemsDesktop";

import './NavBar.css'
const NavBar = (props) => {
    const [c, setC] = useState(null);
    


    return (
        <div className= {c?'NavBar Navup':'NavBar Navdown'?'NavBar':null}>
            <div className = "logo">
            <RestaurantName
             case = "uppercase" 
             weight = {300} 
             color = "white"
             />
              <NavItemsDesktop />
            <div className = "togglebtn">
                <img alt = "a nav bar" width = "30" height = "20" src = {nav} onClick = {props.ShowMobileNav}/>
            </div>
            </div>
            {/* <NavItems /> */}
            {/* <div> */}
      
        {/* </div> */}
        </div>
    )
}

export default NavBar