import React from 'react'
import './TopBar.css'

const TopBar = () => {
    return(
        <div className = "TopBar">

        <div class="contact-info">
        <i class="bi"><span>+1 5589 55488 55</span></i>
        <i class="bi"><span> Mon-Sat: 11AM - 23PM</span></i>
      </div>

      <div class="languages">
        <ul>
          <li> <span>En</span></li>
          <li><a href="#">De</a></li>
        </ul>
      </div>

        </div>
    )
}
export default TopBar