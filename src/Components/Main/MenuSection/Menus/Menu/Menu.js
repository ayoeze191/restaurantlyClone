import React from "react";
import "./Menu.css"
const Menu = (props) => {
    // console.log(props.class)
    return (
        <div className = {`Menu ${props.class==false ? 'Remove-Menu' : 'Add-nav'}`}>
            <div className = "Menu-img">
                <img src = {props.image}  width = "60"/>
            </div>
            <div className = "Menu-Descriptions">
                <div className = "Menu-ingredients">
            {props.ingredients}
            </div>
            <div className = "Menu-ingredients-description">
                {props.ingredientsDescription}
            </div>
            </div>
            <div className = "Menu-price">
                {props.price}
            </div> 
        </div>
    )
}

export default Menu