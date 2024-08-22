import React from 'react'
import "./project.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Signin from './sign-in.png'
import Library from './library.jpg'
import Spotify from './spotify.png'
import ToDo from './to-do.jpg'

const Projects =()=>{
    return (
    <div className='parent-class'>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[Autoplay, EffectCube, Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide className='image'>
        <img src={ToDo} />
          <p>To-Do App with extensive use of React</p>
        </SwiperSlide>
        <SwiperSlide className='image'>
          <img src={Spotify} />
          <p>Multi-media Player</p>
        </SwiperSlide>
        <SwiperSlide className='image'>
        <img src={Library} />
          <p>Library Management System</p>
        </SwiperSlide>
        <SwiperSlide className='image'>
          <img src={Signin} />
          <p>Signin/Signout form with Validation</p>
        </SwiperSlide>
      </Swiper>
      <p className='para'>Scroll to view more projects (The entire project source code can be found on my github)</p>
    </div>

  );
    
}

export default Projects
