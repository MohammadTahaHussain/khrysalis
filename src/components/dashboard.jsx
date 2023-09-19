import links from '../jsons/dashboard-options'
import { Link } from 'react-router-dom'

export default function Dashboard({ active }) {
    return (
        <>
            <div className='border-r border-[#565656]'>
            {
                links?.map((val, index) => {
                    console.log(val?.title)
                    return (
                        <Link className={`flex gap-x-4 p-2 items-center text-white ${active === val?.sr && 'bg-[#0d0c0c]'}`}>
                            <img className='w-5 h-5' src={val?.icon} alt="" />
                            <span className=''>
                                {
                                    val?.title
                                }
                            </span>
                        </Link>
                    )
                })
            }
            </div>
        </>
    )
}