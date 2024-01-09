import React from 'react'
import Sidepages from './Sidepages'
import { CiWallet } from "react-icons/ci";
import NavPages from './Sidepages';






const Sidebar = () => {
    return (
        <div className='sidebar flex flex-col'>
            <div className='nav-header gap-10 p-2 m-2'>
                <img src='/assets/images/nischay.png' alt='profile' className='profile-pic' />
                <div>
                    <p className='font-bold'>Nisyan</p>
                    <p className='underline'>Visit Store</p>
                </div>
                <img src='/assets/images/Chevron Down.svg' alt='Chevron-down' />
            </div>
            <NavPages />
            <div className='flex gap-2 justify-end bg-gray-500 bg-opacity-50 m-2 p-2 w-[90%] rounded-lg mt-auto'>
                <CiWallet className='text-2xl text-white m-2 mr-2' />
                <div className='mr-2'>
                    <p className='text-white'>Available Credits</p>
                    <p className='text-white'>222.10</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
