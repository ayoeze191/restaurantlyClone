import React from 'react'
import './TestimonySection.css'
// import swiper from "swiper/bundle"
import swiper from "swiper/css/bundle"

import Swiper, { Navigation, Pagination } from 'swiper';
import Testimonys from "./Testimony's.js"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSection = () => {
  

  return (
    <div className='TestimonySection' style={{'width': '89%', 'margin': '0 auto'}}>
      <div className='TestimonyDiv'><p>Testimonials</p>
      <h2>What they are Saying About Us</h2>
      </div>
      <Testimonys />
    </div>
  )
}

export default TestimonialSection

