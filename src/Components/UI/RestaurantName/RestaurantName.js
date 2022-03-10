import React from "react";
import './RestaurantName.css'
const RestaurantName = (props) => {
    return (
        <h1 className = "RestaurantName" style = {{ 'display':'flex', 'justifyContent': "center", 'textTransform': `${props.case}`, 'fontWeight': `${props.weight}`, color: `${props.color}`}} >RESTAURANTLY</h1>
    )
}

export default RestaurantName
