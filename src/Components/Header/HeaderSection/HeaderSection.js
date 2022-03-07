import React from 'react'
import './HeaderSection.css'
const HeaderSection = () => {
    return(
        <section className = "HeaderSection">
            <div className = "Header-welcome">
                <div className = "Header-welcome-subdiv">
            <h1>welcome to <span>Restaurantly</span></h1>
            <h2>Delivering great food for more than 18 years</h2>
            </div>
            <div className = "header-Buttons">
                <button> OUR MENU </button> <button> BOOK A TABLE </button>
            </div> 

            </div>
           
            
            <div className = "youtube-button">
            <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="glightbox play-btn"></a>
            </div>
        </section>
    )
}

export default HeaderSection