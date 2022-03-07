import react, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Menus from "./Menus/Menus";
import './MenuSelection.css';
const MenuSelection = () => {
    const [b, setB] = useState({ All  : ["Lobster Bisque", "BreadBarrel", "Crab Cake", "Caesar Selection", "Tuscan Grilled", "Mozzarella Stick", "Greek Salad", "Spinach Salad", "Lobster Roll"],
        Starters : ["Lobster Bisque", "Crab Cake", "Mozzarella Stick"],
        Salads : ["Caesar Selection", "Greek Salad", "Spinach Salad"],
        Specialty : ["BreadBarrel", "Tuscan Grilled", "Lobster Roll"],
})
    const [status, setStatus] = useState('All')
    const value = b[status]
    const changeStatus = (c) => {
        setStatus(c.target.innerText)   
    }
    return (
        <div className = "MenuSelection" id = "MenuSelection">
            <div className = "MenuSelectionFirstDiv">
        <h2>MENU</h2>
        <p> ChecK Our Tasty Menu</p>
        </div>
        <div className = "MenuSelectionSecondDiv">
           <a className = {status=="All"?"changeColor":null} onClick = {(e) => changeStatus(e)}>
               All
           </a>
           <a className = {status=="Starters"?"changeColor":null} onClick = {(e) => changeStatus(e)}>
               Starters
            </a>
            <a className = {status=="Salads"?"changeColor":null} onClick = {(e) => changeStatus(e)}>
                Salads
            </a >
            <a className = {status=="Specialty"?"changeColor":null} onClick = {(e) => changeStatus(e)}>
                Specialty
                </a>
        </div>
        <Menus value = {value}/>
        </div>
    )
}

export default MenuSelection