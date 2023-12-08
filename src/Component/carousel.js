import {React} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import html from '../asset/src/logo/html.png'
import css from '../asset/src/logo/css.png'
import js from '../asset/src/logo/javascript.png'
import bootstrap from '../asset/src/logo/bootstrap.jpeg';
import tailwind from '../asset/src/logo/tailwind.png'
import react from '../asset/src/logo/react.png'
import git from '../asset/src/logo/github.png'
import mongodb from '../asset/src/logo/mongodb.png'
import wordpress from '../asset/src/logo/wordpress.png'
import php from '../asset/src/logo/php.png'
import node from '../asset/src/logo/node.png'
import mysql from '../asset/src/logo/mysql.png'
import express from '../asset/src/logo/express.png'
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
const Carousel=()=>{

    return(
        <div>
            <Swiper  watchSlidesProgress={true}  autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }} slidesPerView={5}loop={true}  breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            // spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            // spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 4,
            // spaceBetween: 40,
          },
          '@1.75': {
            slidesPerView: 5,
            // spaceBetween: 50,
          },
        }} modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-100  logoswipe'src={html} alt="html"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={css} alt="css"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={js} alt="js"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={bootstrap} alt="bootstrap"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe' src={tailwind} alt="tailwind"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={react} alt="html"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={node} alt="css"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className=' logoswipe'src={express} alt="js"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={php} alt="bootstrap"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe' src={mongodb} alt="tailwind"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={mysql} alt="css"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={wordpress} alt="js"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100  logoswipe'src={git} alt="bootstrap"/>
        </SwiperSlide>
        
      </Swiper>
    
            
        </div>
    )
}

export default Carousel