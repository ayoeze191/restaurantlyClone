import React, { useEffect } from "react";
import DropDown from "./DropDown";
import './NavItem.css'
const NavItem = (props) => {
    const items = [
        {key : 0, value: "Dropdown1"}, {key : 1, value: "Dropdown2"}, {key :2, value: "DeepDropdown"}, {key: 3, value: "Dropdown3"}, {key: 4, value: "Dropdown1"}
    ]
    useEffect(() => {
        // console.log(props.link)
    })
    return (
        <div className = "NavItem" key = {props.key}>
        <a href = {props.link} style = {{color: props.value == 'Home'?'#cda45e':null}} onClick = {props.click}>{props.value}</a>
        <div>
        {/* {props.dropDown?
        items.map(item => (
            <DropDown  {... item} />
        ))
        :null} */}

</div>
        </div>
        
    )
}

export default NavItem