import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";


const TransactionFilter = () => {
    return (
        <div className='flex justify-between'>
            <div className="relative m-2 border border-gray-200 rounded-lg ">
                <CiSearch className="absolute left-2 top-2 text-gray-500" size={25} />
                <input
                    placeholder="Search by Order id.."
                    className=" pl-8 pr-2 py-2 rounded-md"
                />
            </div>
            <div className='flex'>
                <button className='flex m-2 p-2 border border-gray-200 text-xl'>Sort<BiSortAlt2 className='m-1' /></button>
                <button className='flex m-2 p-2 border border-gray-200 text-xl'><MdOutlineFileDownload className='text-2xl' /></button>
            </div>
        </div>
    )
}

export default TransactionFilter