import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay} from "swiper";
import "swiper/css";
import './TrustedCompanyPartners'
import Partner1 from './svgs/partner-1.svg'
import Partner2 from './svgs/partner-2.svg'
import Partner3 from './svgs/partner-3.svg'
import Partner4 from './svgs/partner-4.svg'
import TrustedCompanyPartners from './TrustedCompanyPartners';

const TrustedCompanies = () => {
  return (
    <>
    <Swiper
        slidesPerView={3}
        spaceBetween={50}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            324: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
        className="mySwiper pt-5"
      >
        <SwiperSlide><TrustedCompanyPartners Partner={Partner1} /></SwiperSlide>
        <SwiperSlide><TrustedCompanyPartners Partner={Partner2} /></SwiperSlide>
        <SwiperSlide><TrustedCompanyPartners Partner={Partner3} /></SwiperSlide>
        <SwiperSlide><TrustedCompanyPartners Partner={Partner4} /></SwiperSlide>
        <SwiperSlide><TrustedCompanyPartners Partner={Partner3} /></SwiperSlide>
        <SwiperSlide><TrustedCompanyPartners Partner={Partner2} /></SwiperSlide>
        
      </Swiper>
    
    
    </>
  )
}

export default TrustedCompanies