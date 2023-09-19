import '../App.css'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import BlitsLogo from '../images/BLITS_LOGO.png'
import { useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import Slider from '../components/slider'
import { recommendedLinks, gamingLinks, musicLinks, sportsLinks, blipLinks, musicLinks1, sportsLinks1 } from '../jsons/videoLinks'
import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import LiveSlider from '../components/livesSlider'
import logoIcon from '../images/logoIcon.png'
import logoText from "../images/logoText.png"
import Dashboard from '../components/dashboard'
import ganininig from '../images/Mask Group 2.png'
import clip from '../images/Clip.png'
import clip1 from '../images/Clip1.png'
import clip2 from '../images/Clip2.png'
import clip15 from '../images/Clip15.png'
import baronImg from '../images/Image 1.png'
import categories from '../jsons/categories'

function HomePage() {
    return (
        <>
            <div className="bg-[#565656] border-b border-gray-500 fixed w-full z-50">
                <Navbar />
            </div>
            <div className="bg-black relative top-10">
                <div className="m-auto">
                    <div className="flex justify-between w-full">
                        <div className='w-[15%] h-fit z-10'>
                            <div className='fixed w-[200px] bg-[#565656] top-10'>
                                <div className='w-full flex justify-center items-center py-2'>
                                    <FaBars className='text-white' />
                                </div>
                                <Dashboard active={"home"} />
                            </div>
                        </div>
                        <div className='w-[85%] '>
                            <div className='flex justify-center items-center py-2'>
                                <img src={BlitsLogo} className='h-[67px]' alt="" />
                            </div>
                            <div className={`mb-3 -mt-3 category-links-slider w-[98%] m-auto`}>
                                <div className='flex overflow-x-scroll gap-x-3 py-2'>
                                    {
                                        categories?.map((value, index) => {
                                            return (
                                                <div key={index} className='bg-[#565656] px-2 py-1 rounded-lg'>
                                                    <span className="text-transparent text-sm font-extrabold bg-clip-text bg-gradient-to-r from-[#00E9EE] via-[#5194EC] to-[#D414EE]">
                                                        {
                                                            value
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='px-4 pb-10'>
                                <div className="flex max-h-[333px]">
                                    <div className='w-[55%] relative'>
                                        <img src={clip} className='h-full w-full' alt="" />
                                        <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                            00:07
                                        </span>
                                    </div>
                                    <div className='w-[45%]'>
                                        <div className='h-1/2 relative'>
                                            <img src={clip1} alt="" className='h-full w-full' />
                                            <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                                00:07
                                            </span>
                                            <div className='absolute bottom-4 left-2 text-white'>
                                                <span className="text-xs block uppercase px-2 border gray-400 rounded-xl bg-gray-700 w-fit">
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
                                                <img src={clip2} className='h-full w-full' alt="" />
                                                <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                                    00:07
                                                </span>
                                                <div className='absolute bottom-4 left-2 text-white'>
                                                    <span className="text-xs block uppercase px-2 border gray-400 rounded-xl bg-gray-700 w-fit">
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
                                                <img src={clip15} className='h-full w-full' alt="" />
                                                <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                                    00:07
                                                </span>
                                                <div className='absolute bottom-4 left-2 text-white'>
                                                    <span className="text-xs block uppercase px-2 border gray-400 rounded-xl bg-gray-700 w-fit">
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
                                <div className='mt-3'>
                                    <h1 className="font-semibold border-b-2 text-white relative top-[1px] w-fit border-blue-600 z-10">
                                        Live
                                    </h1>
                                    <hr className='z-0 border-gray-600' />
                                    <div className='live-slider'>
                                        <LiveSlider />
                                    </div>
                                </div>
                                <div className='text-white mt-5'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Recommendations
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={recommendedLinks} />
                                    </div>

                                </div>




                                <div className='text-white mt-5 '>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Gaming
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={gamingLinks} />
                                    </div>

                                </div>

                                <div className='w-full h-[324px] mt-5'>
                                    <img src={baronImg} alt="" className='h-full w-full rounded-lg' />
                                </div>

                                <div className='text-white mt-5'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Music
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={musicLinks} />
                                    </div>

                                </div>

                                <div className='text-white mt-5'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Sports
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={sportsLinks} />
                                    </div>

                                </div>

                                <div className='text-white mt-5'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Blips
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={blipLinks} blips={true} />
                                    </div>
                                </div>

                                <div className='w-full h-[324px] mt-5'>
                                    <img src={ganininig} alt="" className='h-full w-full rounded-lg' />
                                </div>


                                <div className='text-white mt-5'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Music
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={musicLinks1} />
                                    </div>
                                </div>

                                <div className='text-white mt-5 '>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Sports
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={sportsLinks1} />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer  */}
            <div className='bg-[#474747] z-50 relative top-10'>
                <footer class="text-white body-font m-auto">
                    <div class="container px-5 py-10 mx-auto">
                        <div class="flex flex-wrap md:text-left text-center order-first">
                            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                                <div className='mb-3'>
                                    <h2 class="title-font font-medium text-white tracking-widest text-sm uppercase">About US</h2>
                                    <hr className='border-blue-600 border-b-2 relative top-[1px] w-10 z-50' />
                                    <hr className='border-gray-600 z-0' />
                                </div>
                                <div>
                                    <img src={logoIcon} className='block m-auto w-10 h-10' alt="" />
                                    <img src={logoText} className='block mt-1' alt="" />
                                    <p className='text-xs mt-[8px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, delectus ad similique suscipit aliquid inventoret rem eos?</p>
                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                                <div className='mb-3'>
                                    <h2 class="title-font font-medium text-white tracking-widest text-sm uppercase">About US</h2>
                                    <hr className='border-blue-600 border-b-2 relative top-[1px] w-10 z-50' />
                                    <hr className='border-gray-600 z-0' />
                                </div>                                              <nav class="list-none mb-10">
                                    <ul className='list-disc text-blue-600'>
                                        <li>
                                            <a class="text-white hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-gray-800">Fourth Link</a>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                                <div className='mb-3'>
                                    <h2 class="title-font font-medium text-white tracking-widest text-sm uppercase">About US</h2>
                                    <hr className='border-blue-600 border-b-2 relative top-[1px] w-10 z-50' />
                                    <hr className='border-gray-600 z-0' />
                                </div>                                             <nav class="list-none mb-10">
                                    <ul className='list-disc text-blue-600'>
                                        <li>
                                            <a class="text-white hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                                <div className='mb-3'>
                                    <h2 class="title-font font-medium text-white tracking-widest text-sm uppercase">Signup for news letter</h2>
                                    <hr className='border-blue-600 border-b-2 relative top-[1px] w-10 z-50' />
                                    <hr className='border-gray-600 z-0' />
                                </div>
                                <div class="flex flex-col gap-y-2">
                                    <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                        <input type="text" placeholder='Enter your Email' id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <button class="lg:mt-2 w-fit xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-x-2 w-fit m-auto">
                        <h1 className='uppercase'>Connect with us</h1>
                        <div className="flex gap-x-2 items-center">
                            <a href=""><AiFillYoutube className='text-red-500 text-[26px]' /></a>
                            <a href=""><FaPinterest className='text-red-600 text-[26px]' /></a>
                            <a href=""><AiFillLinkedin className='text-blue-600 text-[26px]' /></a>
                            <a href=""><BsFacebook className='text-blue-500 text-[24px]' /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default HomePage
