import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderImg1 from '../../assets/images/Slider-img1.png';
import { Pagination } from 'swiper/modules';
import classNames from 'classnames';
import classes from './styles.module.scss';

const SwiperSlider = () => {
  return (
    <div className={classNames(classes.swiperEdit, 'lg:mt-[90px]')}>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper !static"
      >
        <SwiperSlide>
          <img src={SliderImg1} className="w-full" alt="SliderImg1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg1} className="w-full" alt="SliderImg1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg1} className="w-full" alt="SliderImg1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg1} className="w-full" alt="SliderImg1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg1} className="w-full" alt="SliderImg1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
