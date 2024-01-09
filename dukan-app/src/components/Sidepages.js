import React from 'react';
import { GoHome } from 'react-icons/go';
import { SiSimpleanalytics } from "react-icons/si";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBorderAll } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { GrAnnounce } from "react-icons/gr";
import { LuMousePointer2 } from "react-icons/lu";
import { IoFlash } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";

const SideMenuItem = ({ icon, label, selected }) => (
    <div className={`sidemenu-item ${selected ? 'selected' : ''}  p-2 hover:bg-gray-500 hover:bg-opacity-50 focus:bg-gray-500 focus:bg-opacity-50`}>
        {icon && React.cloneElement(icon, { className: 'menu-icons' })}
        <span>{label}</span>
    </div>
);

const NavPages = () => (
    <div className='nav-pages'>
        <SideMenuItem icon={<GoHome />} label="Home" />
        <SideMenuItem icon={<GrNotes />} label="Orders" />
        <SideMenuItem icon={<FaBorderAll />} label="Products" />
        <SideMenuItem icon={<TbTruckDelivery />} label="Delivery" />
        <SideMenuItem icon={<GrAnnounce />} label="Marketing" />

        <SideMenuItem icon={<SiSimpleanalytics />} label="Analytics" />
        <SideMenuItem icon={<MdPayments />} label="Payments" selected={true} />
        <SideMenuItem icon={<LuMousePointer2 />} label="Tools" />
        <SideMenuItem icon={<CiDiscount1 />} label="Discount" />
        <SideMenuItem icon={<IoMdPeople />} label="Audience" />
        <SideMenuItem icon={<IoIosColorPalette />} label="Appearance" />
        <SideMenuItem icon={<IoFlash />} label="Plugins" />
    </div>
);

export default NavPages;
