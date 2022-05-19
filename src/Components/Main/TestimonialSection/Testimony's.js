import React from 'react'
import Testimony from './Testimony/Testimony.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import 'swiper/css'
import testimonials1 from './../../../assets/testimonials/testimonials1.jpg';
import testimonials2 from "./../../../assets/testimonials/testimonials2.jpg";
import testimonials3 from "./../../../assets/testimonials/testimonials3.jpg";
import testimonials4 from "./../../../assets/testimonials/testimonials4.jpg";
import testimonials5 from "./../../../assets/testimonials/testimonials5.jpg";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const Testimonys = (props) => {
    const people = [
        {story: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
         image: testimonials1,
        name: 'Saul Goodman',
        occupation: 'Ceo &amp; Founder'},
        {story: ' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
         image: testimonials2,
        name: 'Sara Wilsson',
        occupation: 'designer'},
        {story: ' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
         image: testimonials3,
        name: 'Jena Karlis',
        occupation: 'Store Owner'},{story: ' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
        image: testimonials4,
       name: 'Matt Brandon',
       occupation: 'Freelancer'},
       {story: ' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
         image: testimonials5,
        name: 'John Larson',
        occupation: 'Entrepreneur'},
    ]

  return (
    <div className = "Testimonys">
    <Swiper
    

        loop = {true}
        speed={600}
      spaceBetween={50}
      autoplay = {{"delay": 5000}}
      pagination = {{clickable: true}}
      slidesPerView='auto'
      breakpoints={{320: {
        slidesPerView: 1,
        spaceBetween: 20
      },  
      // 640: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
      autoHeight = {true}
      
      >
         {people.map((person) => <SwiperSlide> 
         <Testimony {...person} /></SwiperSlide>)}
      </Swiper>
      </div>
  )
}
export default Testimonys