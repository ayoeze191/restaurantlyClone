import React from "react";
import  './NavItemsMobile.css';
import iconclose from '../../../../../assets/iconclose.svg'

import NavItem from "../NavItem/NavItem";
const NavItemsMobile = (props) => {

    const items = [
        {key: 0, value: 'Home', dropDown: false, link: "#Home"},
        {key: 1, value: 'About', dropDown: false, link: "#About"},
        {key: 2, value: 'Menu', dropDown: false, link: "#MenuSelection"},
        {key: 3, value: 'Specials', dropDown: false, link: "#SpecialsSelection"},
        {key: 4, value: 'Events', dropDown: false, link: "#WhyUs"},
        {key: 5, value: 'Chefs', dropDown: false, link: "#About"},
        {key: 6, value: 'Gallery', dropDown: false, link: "#About"},
        {key: 7, value: 'Drop Down', dropDown: true, link: "#About"},
        {key: 8, value: 'contact', dropDown: false, link: "#About"}, 
    ]

return (
    <div className = "NavItemsMobile-Top">
        <div className = "close-btn">
        <img src = {iconclose} onClick = {props.RemoveMobileNav}/>
        </div>
        
      <div className = "NavItemsMobile">
          {items.map(item => (
              
              <NavItem {...item} click = {props.RemoveMobileNav}/>
          ))
}
            
        </div>
        </div>
    )
}

export default NavItemsMobile