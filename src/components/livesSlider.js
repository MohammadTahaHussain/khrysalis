import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiSpeakerLowBold } from 'react-icons/pi'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiFullscreen } from 'react-icons/bi';
import Clip6 from '../images/Clip6-1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './liveSlider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex bg-white w-[420px] h-[220px]">
                        <div className='relative w-[65%]'>
                            <img src={Clip6} className='w-full h-full' alt="" />
                            <span className='bg-red-500 px-1 text-white text-sm absolute top-2 left-2 rounded tracking-wider'>
                                LIVE
                            </span>
                            <div className="flex absolute w-full bottom-2 justify-between px-2">
                                <div className='flex gap-x-1 items-center'>
                                    <PiSpeakerLowBold className='text-white' />
                                    <BsFillPlayFill className='text-white' />
                                </div>
                                <div className='flex gap-x-1'>
                                    <span className="bg-gray-500 text-xs rounded-full px-2">
                                        360p
                                    </span>
                                    <AiOutlineSetting className='text-white' />
                                    <BiFullscreen className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[35%] px-1 py-[2px]'>
                            <span className="block text-blue-500">
                                Laser belch
                            </span>
                            <span className="block text-blue-500 font-thin">
                                Neon White
                            </span>
                            <span className="block">
                                556 viewers
                            </span>
                            <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    English
                                </span>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    FirstPlayThrough
                                </span>
                            </div>
                            <p className='text-sm'>
                                Check out this stream from Laser Belch
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-white w-[420px] h-[220px]">
                        <div className='relative w-[65%]'>
                            <img src={Clip6} className='w-full h-full' alt="" />
                            <span className='bg-red-500 px-1 text-white text-sm absolute top-2 left-2 rounded tracking-wider'>
                                LIVE
                            </span>
                            <div className="flex absolute w-full bottom-2 justify-between px-2">
                                <div className='flex gap-x-1 items-center'>
                                    <PiSpeakerLowBold className='text-white' />
                                    <BsFillPlayFill className='text-white' />
                                </div>
                                <div className='flex gap-x-1'>
                                    <span className="bg-gray-500 text-xs rounded-full px-2">
                                        360p
                                    </span>
                                    <AiOutlineSetting className='text-white' />
                                    <BiFullscreen className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[35%] px-1 py-[2px]'>
                            <span className="block text-blue-500">
                                Laser belch
                            </span>
                            <span className="block text-blue-500 font-thin">
                                Neon White
                            </span>
                            <span className="block">
                                556 viewers
                            </span>
                            <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    English
                                </span>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    FirstPlayThrough
                                </span>
                            </div>
                            <p className='text-sm'>
                                Check out this stream from Laser Belch
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-white w-[420px] h-[220px]">
                        <div className='relative w-[65%]'>
                            <img src={Clip6} className='w-full h-full' alt="" />
                            <span className='bg-red-500 px-1 text-white text-sm absolute top-2 left-2 rounded tracking-wider'>
                                LIVE
                            </span>
                            <div className="flex absolute w-full bottom-2 justify-between px-2">
                                <div className='flex gap-x-1 items-center'>
                                    <PiSpeakerLowBold className='text-white' />
                                    <BsFillPlayFill className='text-white' />
                                </div>
                                <div className='flex gap-x-1'>
                                    <span className="bg-gray-500 text-xs rounded-full px-2">
                                        360p
                                    </span>
                                    <AiOutlineSetting className='text-white' />
                                    <BiFullscreen className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[35%] px-1 py-[2px]'>
                            <span className="block text-blue-500">
                                Laser belch
                            </span>
                            <span className="block text-blue-500 font-thin">
                                Neon White
                            </span>
                            <span className="block">
                                556 viewers
                            </span>
                            <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    English
                                </span>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    FirstPlayThrough
                                </span>
                            </div>
                            <p className='text-sm'>
                                Check out this stream from Laser Belch
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-white w-[420px] h-[220px]">
                        <div className='relative w-[65%]'>
                            <img src={Clip6} className='w-full h-full' alt="" />
                            <span className='bg-red-500 px-1 text-white text-sm absolute top-2 left-2 rounded tracking-wider'>
                                LIVE
                            </span>
                            <div className="flex absolute w-full bottom-2 justify-between px-2">
                                <div className='flex gap-x-1 items-center'>
                                    <PiSpeakerLowBold className='text-white' />
                                    <BsFillPlayFill className='text-white' />
                                </div>
                                <div className='flex gap-x-1'>
                                    <span className="bg-gray-500 text-xs rounded-full px-2">
                                        360p
                                    </span>
                                    <AiOutlineSetting className='text-white' />
                                    <BiFullscreen className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[35%] px-1 py-[2px]'>
                            <span className="block text-blue-500">
                                Laser belch
                            </span>
                            <span className="block text-blue-500 font-thin">
                                Neon White
                            </span>
                            <span className="block">
                                556 viewers
                            </span>
                            <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    English
                                </span>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    FirstPlayThrough
                                </span>
                            </div>
                            <p className='text-sm'>
                                Check out this stream from Laser Belch
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-white w-[420px] h-[220px]">
                        <div className='relative w-[65%]'>
                            <img src={Clip6} className='w-full h-full' alt="" />
                            <span className='bg-red-500 px-1 text-white text-sm absolute top-2 left-2 rounded tracking-wider'>
                                LIVE
                            </span>
                            <div className="flex absolute w-full bottom-2 justify-between px-2">
                                <div className='flex gap-x-1 items-center'>
                                    <PiSpeakerLowBold className='text-white' />
                                    <BsFillPlayFill className='text-white' />
                                </div>
                                <div className='flex gap-x-1'>
                                    <span className="bg-gray-500 text-xs rounded-full px-2">
                                        360p
                                    </span>
                                    <AiOutlineSetting className='text-white' />
                                    <BiFullscreen className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[35%] px-1 py-[2px]'>
                            <span className="block text-blue-500">
                                Laser belch
                            </span>
                            <span className="block text-blue-500 font-thin">
                                Neon White
                            </span>
                            <span className="block">
                                556 viewers
                            </span>
                            <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    English
                                </span>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    FirstPlayThrough
                                </span>
                            </div>
                            <p className='text-sm'>
                                Check out this stream from Laser Belch
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-white w-[420px] h-[220px]">
                        <div className='relative w-[65%]'>
                            <img src={Clip6} className='w-full h-full' alt="" />
                            <span className='bg-red-500 px-1 text-white text-sm absolute top-2 left-2 rounded tracking-wider'>
                                LIVE
                            </span>
                            <div className="flex absolute w-full bottom-2 justify-between px-2">
                                <div className='flex gap-x-1 items-center'>
                                    <PiSpeakerLowBold className='text-white' />
                                    <BsFillPlayFill className='text-white' />
                                </div>
                                <div className='flex gap-x-1'>
                                    <span className="bg-gray-500 text-xs rounded-full px-2">
                                        360p
                                    </span>
                                    <AiOutlineSetting className='text-white' />
                                    <BiFullscreen className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[35%] px-1 py-[2px]'>
                            <span className="block text-blue-500">
                                Laser belch
                            </span>
                            <span className="block text-blue-500 font-thin">
                                Neon White
                            </span>
                            <span className="block">
                                556 viewers
                            </span>
                            <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    English
                                </span>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    FirstPlayThrough
                                </span>
                            </div>
                            <p className='text-sm'>
                                Check out this stream from Laser Belch
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-white w-[420px] h-[220px]">
                        <div className='relative w-[65%]'>
                            <img src={Clip6} className='w-full h-full' alt="" />
                            <span className='bg-red-500 px-1 text-white text-sm absolute top-2 left-2 rounded tracking-wider'>
                                LIVE
                            </span>
                            <div className="flex absolute w-full bottom-2 justify-between px-2">
                                <div className='flex gap-x-1 items-center'>
                                    <PiSpeakerLowBold className='text-white' />
                                    <BsFillPlayFill className='text-white' />
                                </div>
                                <div className='flex gap-x-1'>
                                    <span className="bg-gray-500 text-xs rounded-full px-2">
                                        360p
                                    </span>
                                    <AiOutlineSetting className='text-white' />
                                    <BiFullscreen className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[35%] px-1 py-[2px]'>
                            <span className="block text-blue-500">
                                Laser belch
                            </span>
                            <span className="block text-blue-500 font-thin">
                                Neon White
                            </span>
                            <span className="block">
                                556 viewers
                            </span>
                            <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    English
                                </span>
                                <span className='p-1 bg-gray-500 text-xs rounded text-white'>
                                    FirstPlayThrough
                                </span>
                            </div>
                            <p className='text-sm'>
                                Check out this stream from Laser Belch
                            </p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
