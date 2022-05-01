import react from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import 'swiper/css'
import Slides from "../slides/slides";
import './Slider.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
const Slider = (props) => {
    return(
        <Swiper
        loop = {true}
        speed={600}
      spaceBetween={50}
      autoplay = {{"delay": 5000}}
      pagination = {{clickable: true}}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoHeight = {true}
      className = "Eve"
      
      >
        {
            props.slidesContent.map((a) => <SwiperSlide> 
                <Slides {...a} />
            </SwiperSlide>)
        }
      
    </Swiper>
    )
}


export default Slider