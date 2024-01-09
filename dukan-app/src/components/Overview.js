import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const Overview = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <h3 className='font-bold ml-14 mt-10 text-2xl'>Overview</h3>
                <button className='p-2 m-2 border  border-gray-300 mr-14 flex mt-10 rounded-sm'>Last Month<FaAngleDown className='m-1' /></button>
            </div>
            <div className='flex w-[100%] gap-4 justify-center'>
                <div className='w-[45%] bg-white m-5 p-5'>
                    <p className='text-xl mb-8 '>Online Orders</p>
                    <p className='font-bold text-4xl'>231</p>
                </div>

                <div className='w-[45%] bg-white m-5 p-5'>
                    <p className='text-xl mb-8'>Amount recived </p>
                    <p className='flex font-bold text-4xl'>    <span><FaIndianRupeeSign className='m-1' /> </span>  23,92,31.19</p>
                </div>

            </div>
        </div>

    )
}

export default Overview