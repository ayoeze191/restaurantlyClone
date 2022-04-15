import React from "react";
import './AboutSection.css'
import OverLay from "../../../UI/Overlay/Overlay";
import about from '../../../../assets/about.jpg';
import aboutBg from '../../../../assets/aboutBg.jpg';





const AboutSection = () => {
    return (
        <div style = {{ backgroundImage: `url(${aboutBg})`, "padding": ""}} id = "About" className = "AboutSection">
            <OverLay height = "fit-content" thickness = "0.6" position = "normal" padding="4rem 0">
                <div className = "secondAbout">
                <div className = 'about-img' data-aos = "zoom-in" data-aos-duration = "100" >
                  <div className = "cutters-div">
                    <div className = "cutter up"> 
                    </div>
                    <div className = "cutter down">
                    </div>
                    </div>
                    <div className = "about-image-div">
                    <img src = {about}/>
                    </div>
                </div>

            <div class="content" data-aos="fade-up" data-aos-duration = "700">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
              </div>
            </OverLay>

        </div>
    )
}


export default AboutSection