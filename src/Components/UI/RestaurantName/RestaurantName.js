import React from "react";

const RestaurantName = (props) => {
    return (
        <h1 style = {{ 'display':'flex', 'justifyContent': "center", 'textTransform': `${props.case}`, 'fontWeight': `${props.weight}`, color: `${props.color}`}} >RESTAURANTLY</h1>
    )
}

export default RestaurantName
