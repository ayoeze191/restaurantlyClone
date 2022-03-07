import React from "react";

import NavBar from "../UI/NavBar/NavBar";
import herobg from '../../assets/herobg.jpg'
import OverLay from "../UI/Overlay/Overlay";
import HeaderSection from "./HeaderSection/HeaderSection";
import './Header.css'
const Header = () => {
    return (
        <div id = "Home" className = "Header" style = {{ backgroundImage: `url(${herobg})`}}>
            {/* <HeaderSection/> */}
        </div>
    )
}
export default Header