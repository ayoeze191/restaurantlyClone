import React, { useState } from "react";

import NavBar from "../UI/NavBar/NavBar";
import herobg from '../../assets/herobg.jpg'
import OverLay from "../UI/Overlay/Overlay";
import HeaderSection from "./HeaderSection/HeaderSection";
import TopBar from "./TopBar/TopBar.js"
import NavItemsMobile from "../UI/NavBar/NavItems/NavItemsMobile/NavItemsMobile";
import './Header.css'
const Header = () => {
    
const [MobileNavStatus, setMobileNavStatus] = useState(false);
      const ShowMobileNav = () => {
        setMobileNavStatus(true)
          // console.log(this.state.MobileNavStatus)
      }
    
      const RemoveMobileNav = () => {
        setMobileNavStatus(false)
      }
    return (
        <div id = "Home" className = "Header" style = {{ backgroundImage: `url(${herobg})`}}>
     <TopBar />
     <NavBar ShowMobileNav = {ShowMobileNav}/>  
     <HeaderSection />
     {MobileNavStatus?<NavItemsMobile RemoveMobileNav = {RemoveMobileNav} />:null}
        </div>
    )
}
export default Header