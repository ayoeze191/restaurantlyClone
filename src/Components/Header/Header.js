import React from "react";

import NavBar from "../UI/NavBar/NavBar";
import herobg from '../../assets/herobg.jpg'
import OverLay from "../UI/Overlay/Overlay";

import './Header.css'
const Header = () => {
    return (
        <div id = "Home" className = "Header" style = {{ backgroundImage: `url(${herobg})`}}>
            
        </div>
    )
}
export default Header