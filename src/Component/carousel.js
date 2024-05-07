import { React } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import html from "../asset/src/logo/html.png";
import css from "../asset/src/logo/css.png";
import js from "../asset/src/logo/javascript.png";
import bootstrap from "../asset/src/logo/bootstrap.jpeg";
import tailwind from "../asset/src/logo/tailwind.png";
import react from "../asset/src/logo/react.png";
import git from "../asset/src/logo/github.png";
import mongodb from "../asset/src/logo/mongodb.png";
import wordpress from "../asset/src/logo/wordpress.png";
import php from "../asset/src/logo/php.png";
import node from "../asset/src/logo/node.png";
import mysql from "../asset/src/logo/mysql.png";
import express from "../asset/src/logo/express.png";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Carousel = () => {
  const swipData = [
    {
      id: 1,
      name: "HTML",
      img: html,
    },
    {
      id: 2,
      name: "CSS",
      img: css,
    },
    {
      id: 3,
      name: "JS",
      img: js,
    },
    {
      id: 4,
      name: "BootStrap",
      img: bootstrap,
    },
    {
      id: 5,
      name: "TailwindCSS",
      img: tailwind,
    },
    {
      id: 6,
      name: "React",
      img: react,
    },
    {
      id: 7,
      name: "Node",
      img: node,
    },
    {
      id: 8,
      name: "Express",
      img: express,
    },
    {
      id: 9,
      name: "PHP",
      img: php,
    },
    {
      id: 10,
      name: "MongoDB",
      img: mongodb,
    },
    {
      id: 11,
      name: "MySQL",
      img: mysql,
    },
    {
      id: 12,
      name: "Wordpress",
      img: wordpress,
    },
    {
      id: 13,
      name: "Github",
      img: git,
    },
  ];

  return (
    <div>
      <Swiper
        watchSlidesProgress={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            // spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            // spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            // spaceBetween: 40,
          },
          "@1.75": {
            slidesPerView: 5,
            // spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {swipData.map((swip,i) => {
          return <SwiperSlide key={i}>
              <img className="w-100  logoswipe" src={swip.img} alt={swip.name} />
            </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
};
export default Carousel;
