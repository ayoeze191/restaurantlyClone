import React, { useEffect, useRef, useState } from "react";
import Specials from "./Specials/Specials";
import './SpecialsSection.css'

const SpecialsSection = () => {
    const [status, setStatus] = useState(0);
  
    const changeStatus = (e) => {
        e.preventDefault()
        
        if(e.target.innerText == "Modi Sit Est"){
            setStatus(0)
        }
        else if(e.target.innerText == "Unde praesentium sed"){
            setStatus(1)
        }
        else if(e.target.innerText == "Pariatur explicabo vel"){
            setStatus(2)
        }
        else if(e.target.innerText == "Nostrum quil quasi"){
            setStatus(3)
        }
        else if(e.target.innerText == "Lusto ut expedita aut"){
            setStatus(4)
        }
    }
    useEffect(() => {
        // console.log(status)
    })

    return (
        <div className = "Boss" id = "SpecialsSelection">
            <div className = "SpecialsSection" data-aos = "fade-up" data-aos-duration = "700">
            <h2>Specials<hr/></h2>
            <p>Check Our Specials</p>
            </div>
            <div className = "SpecialsSectionDiv"  data-aos = "fade-up" data-aos-duration = "700">
            <div className = "Specials-links">
            <a onClick = {changeStatus} href = "#" className = {status==0?"a":null}>
                Modi Sit Est
            </a>
            <a onClick = {changeStatus} href = "#" className = {status==1?"a":null}>
                Unde praesentium sed
            </a>
            <a onClick = {changeStatus} href = "#" className = {status==2?"a":null}>
                Pariatur explicabo vel
            </a>
            <a href = "#" onClick = {changeStatus} className = {status==3?"a":null}>
                Nostrum quil quasi
            </a>
            <a href = "#" onClick = {changeStatus} className = {status==4?"a":null}>
                Lusto ut expedita aut
            </a>
            </div>
            <Specials no = {status}/>
            </div>
        </div>
    )
}

export default SpecialsSection