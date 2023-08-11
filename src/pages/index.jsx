import '../App.css'
import Navbar from '../components/navbar'
import dashboardLinks from "../jsons/dashboard-options"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import BlitsLogo from '../images/BLITS_LOGO-01.png'
import { useRef, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg"
import { HiOutlineUser } from 'react-icons/hi'
import userIcon from '../images/userIcon.png'
import Slider from '../components/slider'

function HomePage() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (scrollOffset) => {
        setScrollPosition((prevPosition) => prevPosition + scrollOffset);
    };
    return (
        <>
            <div className="bg-[#474747] border-b border-gray-500 fixed w-full z-50">
                <Navbar />
            </div>
            <div className="bg-black relative top-10">
                <div className="max-w-[1268px] m-auto">
                    <div className="flex">
                        <div className='w-[250px] h-fit'>
                            <div className='p-2 fixed w-[200px] bg-[#474747] top-10'>
                                <div>
                                    <FaBars className='ml-9 text-white' />
                                </div>
                                {
                                    dashboardLinks?.map((val, index) => {
                                        return (
                                            <Link className='flex gap-x-4 mt-3 items-center text-white'>
                                                <img className='w-5 h-5' src={val?.icon} alt="" />
                                                {
                                                    val?.title
                                                }
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='flex justify-center items-center py-2'>
                                <img src={BlitsLogo} className='h-[35px]' alt="" />
                            </div>
                            <div>
                                {/* Slider  */}
                            </div>
                            <div className='px-4'>
                                <div className="flex max-h-[333px]">
                                    <div className='w-[55%] relative'>
                                        <img src="https://images6.alphacoders.com/132/thumbbig-1326038.webp" className='h-full w-full' alt="" />
                                        {/* <img src="https://c4.wallpaperflare.com/wallpaper/861/16/991/oblivion-epic-games-fortnite-hd-wallpaper-thumb.jpg" className='h-full w-full' alt="" /> */}
                                        <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                            00:07
                                        </span>
                                    </div>
                                    <div className='w-[45%]'>
                                        <div className='h-1/2 relative'>
                                            <img src={"https://c4.wallpaperflare.com/wallpaper/966/804/951/epic-games-fortnite-2019-season-x-hd-wallpaper-preview.jpg"} alt="" className='h-full w-full' />
                                            <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                                00:07
                                            </span>
                                            <div className='absolute bottom-4 left-2 text-white'>
                                                <span className="text-xs block uppercase px-2 border border gray-400 rounded-xl bg-gray-700 w-fit">
                                                    gaming
                                                </span>
                                                <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                                                <div className="flex items-center font-extralight gap-x-1">
                                                    <FaUser className='text-sm' />
                                                    <span className='text-xs'>
                                                        Admin
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-1/2 flex'>
                                            <div className='w-1/2 relative'>
                                                <img src="https://c4.wallpaperflare.com/wallpaper/443/826/368/screenshot-4k-fortnite-wallpaper-preview.jpg" className='h-full w-full' alt="" />
                                                <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                                    00:07
                                                </span>
                                                <div className='absolute bottom-4 left-2 text-white'>
                                                    <span className="text-xs block uppercase px-2 border border gray-400 rounded-xl bg-gray-700 w-fit">
                                                        gaming
                                                    </span>
                                                    <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                                                    <div className="flex items-center font-extralight gap-x-1">
                                                        <FaUser className='text-sm' />
                                                        <span className='text-xs'>
                                                            Admin
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-1/2 relative'>
                                                <img src="https://c4.wallpaperflare.com/wallpaper/646/747/577/video-game-fortnite-chest-fortnite-battle-royale-hd-wallpaper-preview.jpg" className='h-full w-full' alt="" />
                                                <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                                    00:07
                                                </span>
                                                <div className='absolute bottom-4 left-2 text-white'>
                                                    <span className="text-xs block uppercase px-2 border border gray-400 rounded-xl bg-gray-700 w-fit">
                                                        gaming
                                                    </span>
                                                    <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                                                    <div className="flex items-center font-extralight gap-x-1">
                                                        <FaUser className='text-sm' />
                                                        <span className='text-xs'>
                                                            Admin
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    Live section 
                                </div> */}
                                <div className='text-white mt-2'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Recommendations
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider img={"https://images.unsplash.com/photo-1567606404839-dea8cec4d278?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                                    </div>

                                </div>




                                <div className='text-white mt-2 '>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Gaming
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider img={"https://wallpapercave.com/dwp1x/wp11559101.jpg"}/>
                                    </div>

                                </div>

                                <div className='text-white mt-2'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Music
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider img={"https://wallpapercave.com/uwp/uwp3716120.jpeg"}/>
                                    </div>

                                </div>

                                <div className='text-white mt-2'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Sports
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider img={"https://i.gifer.com/9ztf.gif"}/>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage