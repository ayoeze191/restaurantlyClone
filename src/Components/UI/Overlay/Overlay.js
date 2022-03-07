import React from "react";
import './Overlay.css'
const OverLay = (props) => {
    const Color = () => {
        return(
            `rgba(0, 0, 0, ${props.thickness})`
        )
    }
    return (
        <div className = "Overlay" style = {{height: `${props.height}`, width : "100%", backgroundColor: Color()}}>{props.children}</div>
    )
}

export default OverLay