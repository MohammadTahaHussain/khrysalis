import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineUser } from 'react-icons/hi';
import userIcon from '../images/userIcon.png'
import { Link } from 'react-router-dom';
import calenderImg from '../images/calender.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import "../App.css"


// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(props?.data)
    }, [props.data])

    return (
        <>
            <Swiper
                slidesPerView={props?.blips ? 4 : 3}
                spaceBetween={30}
                // pagination={{
                //     clickable: true,
                // }}
                // modules={[Pagination]}
                className="mySwiper relative !w-full flex justify-start mt-4"
            >
                {
                    data?.map((val, index) => {
                        return (
                            <SwiperSlide className='!bg-transparent' key={index}>
                                <a href={val?.link} className='flex flex-col gap-y-1'>
                                    <div>
                                        <img src={val?.img} className={` ${props.blips ? "!w-[270px] !h-[450px]" : "!w-[300px] !h-[190px]"} !w-[332px] !h-[190px] rounded-lg`} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <div className="flex items-center gap-x-2">
                                            <img src={userIcon} alt="" className='' style={{ width: "20px", height: "20px" }} />
                                            <span className='text-sm font-semibold'>{val?.title}</span>
                                        </div>
                                        <div className='flex flex-col gap-y-1'>
                                            <div className='flex items-center text-sm ml-6'>
                                                <HiOutlineUser />
                                                <span className='text-xs'>{val?.userName}</span>
                                            </div>
                                            <div className='flex items-center text-sm ml-6 gap-x-1'>
                                                <img src={calenderImg} className='!h-3 !w-3' />
                                                <span className='text-xs'>{val?.timeAgo}</span>
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
