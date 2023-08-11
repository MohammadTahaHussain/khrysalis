import { AiOutlineSearch } from "react-icons/ai"
import { BiSolidUserCircle } from "react-icons/bi"
import Logo from "../images/logo.png"
import { MdOutlineDarkMode } from "react-icons/md"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-1 max-w-[1268px] m-auto bg-transparent w-full">
            <div className="text-white"><img src={Logo} alt="" className="w-36 h-8"/></div>
            <div className="bg-transparent">
                <div className="border border-gray-400 flex rounded-full bg-transparent z-10">
                    <select name="" id="" className="text-sm text-opacity-80 uppercase px-1 text-teal-400 bg-transparent border-r border-gray-400 focus-visible:outline-none">
                        <option value="" selected>All</option>
                    </select>
                    <div className="bg-transparent">
                        <input type="text" name="" id="" className="pl-2 bg-transparent focus:border-0 focus:outline-none placeholder:text-teal-500 text-teal-400" placeholder="Search Here.." />
                    </div>
                    <button className="bg-violet-700 relative w-[35px] z-0 rounded-full right-[0.5px] flex justify-center items-center">
                        <AiOutlineSearch className="text-white" />
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-x-1"> 
                <button className="flex px-2 bg-violet-700 text-white items-center gap-x-1 rounded-full">
                    <BiSolidUserCircle/>
                    Sign In
                </button>
                <MdOutlineDarkMode className="text-white text-[20px]"/>
            </div>
        </div>
    )
}

export default Navbar