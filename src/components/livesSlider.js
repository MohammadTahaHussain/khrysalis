import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFacebook, BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { PiSpeakerSimpleLowBold } from 'react-icons/pi'
import { BiFullscreen } from 'react-icons/bi'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import "../App.css"


// import required modules
import { Pagination } from 'swiper/modules';

export default function LiveSlider(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        setData([1,2,3,4,5,6])
    }, [props.data])

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                // pagination={{
                //     clickable: true,
                // }}
                // modules={[Pagination]}
                className="mySwiper relative !w-[1000px] flex justify-start mt-4"
            >
                {
                    data?.map((val, index) => {
                        return (
                            <SwiperSlide className='!bg-transparent' key={index}>
                                <a href={val?.link} className='flex flex-col gap-y-1'>
                                    <div className='flex w-[480px]'>
                                        <div className='w-[70%] relative h-[232px]'>
                                            <img src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className='h-full w-full'/>
                                            <span className='absolute text-white rounded px-1 text-sm top-2 left-1 bg-red-600'>
                                                LIVE
                                            </span>
                                            <div className="flex items-center justify-between absolute bottom-0 w-full p-1">
                                                <div className='flex items-center gap-x-1'>
                                                    <BsFillPlayFill className='text-white text-[20px]' />
                                                    <PiSpeakerSimpleLowBold className='text-[16px] text-white' />
                                                </div>
                                                <div className='flex items-center gap-x-2'>
                                                    <span className='bg-gray-200 text-black rounded-full flex items-center justify-center px-2 text-xs'>
                                                        360
                                                    </span>
                                                    <AiOutlineSetting className='text-white' />
                                                    <BiFullscreen className='text-white' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-white w-[30%] p-2 h-[232px]'>
                                            <div className="flex gap-x-1">
                                                <img src="https://images.unsplash.com/photo-1611784728764-bd07975a4b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='h-8 w-8 rounded-full' alt="" />
                                                <div className='flex flex-col'>
                                                    <span className="font-semibold text-blue-600">
                                                        Laser Belch
                                                    </span>
                                                    <span>
                                                        Neon White
                                                    </span>
                                                    <span>
                                                        556 viewers
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap justify-start gap-2">
                                                <span className='capitalize text-sm bg-gray-400 px-2  rounded-lg'>
                                                    English
                                                </span>
                                                <span className='capitalize text-sm bg-gray-400 px-2  rounded-lg'>
                                                    English
                                                </span>
                                            </div>
                                            <div>
                                                Check out this stream from Laser Belch
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
