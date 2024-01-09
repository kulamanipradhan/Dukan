import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { AiTwotoneNotification } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className="flex justify-between w-[100%] bg-white ">
            <div className="flex w-[33%] m-2">
                <p className="text-xl ml-10">Payments</p>
                <div className="flex items-center ml-4">
                    <CiCircleInfo className="m-2" />
                    <span className="ml-2">How it works</span>
                </div>
            </div>
            <div className="w-[33%] relative m-2">
                <div className="relative">
                    <CiSearch className="absolute left-2 top-2 text-gray-500" size={25} />
                    <input
                        placeholder="Search features, tutorials, etc"
                        className="w-[70%] pl-8 pr-2 py-2 rounded-md bg-gray-100"
                    />
                </div>
            </div>
            <div className="w-[33%] flex justify-end mr-10">
                <AiTwotoneNotification className="text-4xl rounded-full bg-gray-300 m-2 p-2" />
                <FaCaretDown className="text-4xl rounded-full bg-gray-300 m-2 p-2" />

            </div>
        </div>

    );
};

export default Header;
