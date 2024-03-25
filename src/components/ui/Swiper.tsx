'use client'

import React, { useRef, useState } from 'react';
import { Swiper as Swipers, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


export default function Swiper(){


    return(
        <>
        <div>
          
            <Swipers
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView= {1}
              direction='horizontal'
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full h-full"
          >
            <SwiperSlide>
              <div className='absolute w-full h-full duration-150'>
                <Image alt='ad' src={"https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202402/2024022915373727773951332495_406.jpg&w=750&h=0"} width={500} height={100} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='absolute w-full h-full duration-150'>
                <Image alt='ad' src={"https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202402/2024022915373727773951332495_406.jpg&w=750&h=0"} width={500} height={100} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image alt='ad' src={"https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202402/2024022915373727773951332495_406.jpg&w=750&h=0"} width={500} height={100} />
              </div>
            </SwiperSlide>

          </Swipers>

        </div>
        </>
    )
}
