'use client'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { mainEventImageData } from '@/lib/mainEventImageData';
import Image from 'next/image';

export default function MainEventSection() {

  const [backgroundImage, setBackgroundImage] = useState(mainEventImageData[0].src);
  const [autoPlayStatus, setAutoPlayStatus] = useState(true);

  const handleSlideChange = (slide: any) => {
    const currentSlideIndex: number = slide.realIndex;
    setBackgroundImage(mainEventImageData[currentSlideIndex].src);
  }

  return (
    <section className='relative overflow-hidden pb-bottom min-h-[68vh]'>
      <div
        className='absolute overflow-hidden top-0 right-0 bottom-[50px] left-0 bg-cover border-solid border-0'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'blur(5px)',
          transition: 'background-image 1s ease-in-out'
        }}
      ></div>
      <div className='absolute left-4 right-4 bottom-0 top-4 overflow-hidden block'>
        <Swiper
          className='relative w-full h-full'
          slidesPerView={1}
          loop={true}
          autoplay={autoPlayStatus}
          modules={[Pagination, Navigation, Autoplay]}
          onSlideChange={handleSlideChange}>
          {mainEventImageData.map((item, idx) => {
            return (
              <SwiperSlide key={idx} >
                <div className='absolute w-full h-full duration-150'>
                  <Image
                    src={item.src}
                    fill
                    alt='aaa'
                  />
                </div>
                <div className='flex justify-center items-end w-full h-full'>
                  <div className='flex flex-col items-center z-[1] max-w-[(100%-60px)] mb-[52px]'>
                    <h3 className='flex flex-col items-center text-2xl font-bold text-white'>
                      <span>{item.title1}</span>
                      <span>{item.title2}</span>
                    </h3>
                    <div className='mt-[10px] text-sm font-semibold text-white'>
                      <span className='overflow-hidden text-ellipsis text-center'>{item.subTitle}</span>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 right-0 h-[32px] flex'>
                  <div className='flex justify-center items-center bg-[#00000073] text-[13px]'>
                    <button className='text-xs text-white px-2 font-semibold flex items-center justify-center'>
                      <div onClick={() => setAutoPlayStatus(!autoPlayStatus)} className='mr-2'>
                        { autoPlayStatus ?
                          <Image width="20" height="20" src="https://img.icons8.com/windows/32/FFFFFF/pause--v1.png" alt="pause--v1"/> :
                          <Image width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/play--v1.png" alt="play--v1"/>
                        }
                      </div>
                      <span>{item.id}</span>
                      <span className='opacity-50'>/{Object.keys(mainEventImageData).length}</span>
                    </button>
                  </div>
                  <div className='flex justify-center items-center bg-[#00000073] border-l-2 border-transparent'>
                    <button className='text-xs text-white px-2 flex justify-center items-center font-semibold font-[Pretendard-Light]'>
                      <span>전체보기</span> 
                      <Image width="15" height="15" src="https://img.icons8.com/ios/50/FFFFFF/back--v1.png" alt="back--v1" className='rotate-[180deg] relative top-[2px]'/>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
}
