import '../App.css'
import Navbar from '../components/navbar'
import dashboardLinks from "../jsons/dashboard-options"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import BlitsLogo from '../images/BLITS_LOGO-01.png'
import { useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import Slider from '../components/slider'
import { recommendedLinks, gamingLinks, musicLinks, sportsLinks, clipLinks } from '../jsons/videoLinks'
import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { BsFacebook} from 'react-icons/bs'
import LiveSlider from '../components/livesSlider'
import logoIcon from '../images/logoIcon.png'
import logoText from "../images/logoText.png"

function HomePage() {
    return (
        <>
            <div className="bg-[#474747] border-b border-gray-500 fixed w-full z-10">
                <Navbar />
            </div>
            <div className="bg-black relative top-10">
                <div className="max-w-[1268px] m-auto">
                    <div className="flex">
                        <div className='w-[250px] h-fit z-10'>
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
                            <div className='mb-3 category-links-slider w-[1024px] m-auto'>
                                <div className='flex overflow-x-scroll gap-x-2 py-2'>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                    <span className="rounded-lg text-sm bg-gray-400 px-1">
                                        Travel
                                    </span>
                                </div>
                            </div>
                            <div className='px-4 pb-10'>
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
                                                <img src="https://c4.wallpaperflare.com/wallpaper/443/826/368/screenshot-4k-fortnite-wallpaper-preview.jpg" className='h-full w-full' alt="" />
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
                                                <img src="https://c4.wallpaperflare.com/wallpaper/646/747/577/video-game-fortnite-chest-fortnite-battle-royale-hd-wallpaper-preview.jpg" className='h-full w-full' alt="" />
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
                                    <LiveSlider/>   
                                </div>
                                <div className='text-white mt-2'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Recommendations
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={recommendedLinks} />
                                    </div>

                                </div>




                                <div className='text-white mt-2 '>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Gaming
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={gamingLinks} />
                                    </div>

                                </div>

                                <div className='text-white mt-2'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Music
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={musicLinks} />
                                    </div>

                                </div>

                                <div className='text-white mt-2'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Sports
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={sportsLinks} />
                                    </div>

                                </div>

                                <div className='text-white mt-2'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Clips
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={clipLinks} clips={true} />
                                    </div>
                                </div>

                                <div className='text-white mt-2 '>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                        Gaming
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={gamingLinks} />
                                    </div>

                                </div>

                                <div className='text-white mt-2'>
                                    <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-50">
                                        Music
                                    </h1>
                                    <hr className='z-0 border-gray-600' />

                                    <div>
                                        <Slider data={musicLinks} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer  */}
            <div className='bg-[#474747] z-50 relative top-10'>
                <footer class="text-white body-font max-w-[1268px] m-auto">
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
                                    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, delectus ad similique suscipit aliquid inventoret rem eos?</p>
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
                                    <h2 class="title-font font-medium text-white tracking-widest text-sm uppercase">About US</h2>
                                    <hr className='border-blue-600 border-b-2 relative top-[1px] w-10 z-50' />
                                    <hr className='border-gray-600 z-0' />
                                </div>                                               <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                    <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                        <label for="footer-field" class="leading-7 text-sm text-white">Placeholder</label>
                                        <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                </div>
                                <p class="text-white text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                                    <br class="lg:block hidden" />waistcoat green juice
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="container px-5 py-6 mx-auto flex items-center justify-between sm:flex-row flex-col">
                            <div className="bg-blue-600 w-[200px] h-[100px] flex justify-center items-center">
                                This is an ad
                            </div>
                            <div className="flex flex-col items-center gap-x-2">
                                <h1 className='uppercase'>Connect with us</h1>
                                <div className="flex gap-x-2 items-center">
                                    <a href=""><AiFillYoutube className='text-red-500 text-[26px]' /></a>
                                    <a href=""><FaPinterest className='text-red-600 text-[26px]' /></a>
                                    <a href=""><AiFillLinkedin className='text-blue-600 text-[26px]' /></a>
                                    <a href=""><BsFacebook className='text-blue-500 text-[24px]' /></a>
                                </div>
                            </div>
                            <div className="bg-blue-600 w-[200px] h-[100px] flex justify-center items-center">
                                This is an ad
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default HomePage