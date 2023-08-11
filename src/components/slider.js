import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineUser } from 'react-icons/hi';
import userIcon from '../images/userIcon.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import "../App.css"


// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider({ img }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                // pagination={{
                //     clickable: true,
                // }}
                // modules={[Pagination]}
                className="mySwiper relative !w-[1000px] flex justify-start mt-4"
            >
                <SwiperSlide className='!bg-transparent'>
                    <div className='flex flex-col gap-y-1'>
                        <div>
                            <img src={img || "https://wallpapercave.com/dwp1x/wp12528831.jpg"}  className='!w-[332px] !h-[190px] rounded-lg' alt="" />
                        </div>
                        <div className='flex flex-col gap-y-[2px]'>
                            <div className="flex items-center gap-x-2">
                                <img src={userIcon} alt="" className='' style={{ width: "20px", height: "20px" }} />
                                <span className='text-sm font-semibold'>Sweet love 1</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='!bg-transparent'>
                    <div className='flex flex-col gap-y-1'>
                        <div>
                            <img src={img || "https://wallpapercave.com/dwp1x/wp12528831.jpg"}  className='!w-[332px] !h-[190px] rounded-lg' alt="" />
                        </div>
                        <div className='flex flex-col gap-y-[2px]'>
                            <div className="flex items-center gap-x-2">
                                <img src={userIcon} alt="" className='' style={{ width: "20px", height: "20px" }} />
                                <span className='text-sm font-semibold'>Sweet love 1</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='!bg-transparent'>
                    <div className='flex flex-col gap-y-1'>
                        <div>
                            <img src={img || "https://wallpapercave.com/dwp1x/wp12528831.jpg"}  className='!w-[332px] !h-[190px] rounded-lg' alt="" />
                        </div>
                        <div className='flex flex-col gap-y-[2px]'>
                            <div className="flex items-center gap-x-2">
                                <img src={userIcon} alt="" className='' style={{ width: "20px", height: "20px" }} />
                                <span className='text-sm font-semibold'>Sweet love 1</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='!bg-transparent'>
                    <div className='flex flex-col gap-y-1'>
                        <div>
                            <img src={img || "https://wallpapercave.com/dwp1x/wp12528831.jpg"}  className='!w-[332px] !h-[190px] rounded-lg' alt="" />
                        </div>
                        <div className='flex flex-col gap-y-[2px]'>
                            <div className="flex items-center gap-x-2">
                                <img src={userIcon} alt="" className='' style={{ width: "20px", height: "20px" }} />
                                <span className='text-sm font-semibold'>Sweet love 1</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='!bg-transparent'>
                    <div className='flex flex-col gap-y-1'>
                        <div>
                            <img src={img || "https://wallpapercave.com/dwp1x/wp12528831.jpg"}  className='!w-[332px] !h-[190px] rounded-lg' alt="" />
                        </div>
                        <div className='flex flex-col gap-y-[2px]'>
                            <div className="flex items-center gap-x-2">
                                <img src={userIcon} alt="" className='' style={{ width: "20px", height: "20px" }} />
                                <span className='text-sm font-semibold'>Sweet love 1</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='!bg-transparent'>
                    <div className='flex flex-col gap-y-1'>
                        <div>
                            <img src={img || "https://wallpapercave.com/dwp1x/wp12528831.jpg"} className='!w-[332px] !h-[190px] rounded-lg' alt="" />
                        </div>
                        <div className='flex flex-col gap-y-[2px]'>
                            <div className="flex items-center gap-x-2">
                                <img src={userIcon} alt="" className='' style={{ width: "20px", height: "20px" }} />
                                <span className='text-sm font-semibold'>Sweet love 1</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                            <div className='flex items-center text-sm ml-6'>
                                <HiOutlineUser />
                                <span className='text-xs'>Admin</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
