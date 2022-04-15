import React from "react";
import './Event.css';
import eventsBg from "./../../../assets/eventsBg.jpg";
import customParties from "./../../../assets/customParties.jpg"
import privateParties from "./../../../assets/privateParties.jpg"
import birthdaysParties from "./../../../assets/birthdaysParties.jpg"

import Slider from "./slider/slider";

const Event = () => {
    const slidesContent = [
        {"image": customParties, title: 'customParties', amount: `${190}`, storyOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.', storyTwo1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',storyTwo2: ' Duis aute irure dolor in reprehenderit in voluptate velit.', storyTwo3 : "Ullamco laboris nisi ut aliquip ex ea commodo consequat.", storyThree:  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur"},
        {"image": birthdaysParties, title: "bibrthdayparties", "amount": "$200",  storyOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.', storyTwo1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',storyTwo2: ' Duis aute irure dolor in reprehenderit in voluptate velit.', storyTwo3 : "Ullamco laboris nisi ut aliquip ex ea commodo consequat.", storyThree:  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur"},
        {'image': privateParties, title :"privateParties", "amount": "$300", storyOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.', storyTwo1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',storyTwo2: ' Duis aute irure dolor in reprehenderit in voluptate velit.', storyTwo3 : "Ullamco laboris nisi ut aliquip ex ea commodo consequat.", storyThree:  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur"}
    ]

    return (
        <div className="Event" style={{"backgroundImage": `url(${eventsBg})`, "backgroundRepeat" : "no-repeat", "backgroundPosition" : "center", "backgroundSize" : "cover", "color": "white"}} >
            <div style={{"width": "100%", "height": "100%"}} className = "fter">
            <div style={{"width": "89%", "margin": "0 auto", "display": "flex", "flexDirection": "column"}} className = "Event" data-aos="fade-up">
            <div style={{ "margin": "3rem 0"}}>
            <h2>Events</h2>
            <h1>Organize Your Event In Our Restaurant</h1>
            </div>

        <div  data-aos="fade-up" data-aos-delay="100">
        <Slider slidesContent = {slidesContent}/>
        </div>


            </div>
            </div>
        </div>
    )
}



export default Event