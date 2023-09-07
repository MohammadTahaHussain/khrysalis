import links from '../jsons/dashboard-options'
import { Link } from 'react-router-dom'

export default function Dashboard({active}) {
    return (
        <>
            {
                links?.map((val, index) => {
                    console.log(val?.title)
                    return (
                        <Link className={`flex gap-x-4 p-2 items-center text-white ${active === val?.title && 'bg-gradient-to-b from-[#48c5da] to-[#5217aa]'}`}>
                            <img className='w-5 h-5' src={val?.icon} alt="" />
                            {
                                val?.title
                            }
                        </Link>
                    )
                })
            }
        </>
    )
}