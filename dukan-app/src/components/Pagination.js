import React, { useState } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Pagination = ({ totalPageCount, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(10);

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    //     onPageChange(newPage);
    // };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        // Define the static page numbers
        const staticPages = [1, '...', 10, 11, 12, 13, 14, 15, 16, 17, 18];

        staticPages.forEach((page, index) => {
            if (page === '...') {
                pageNumbers.push(
                    <span key={index} className="mx-1 px-3 py-1  bg-white text-gray-500">
                        ...
                    </span>
                );
            } else {
                pageNumbers.push(
                    <span
                        key={index}

                        className={`cursor-pointer mt-3 mx-1 px-3 mb-5 py-1 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'
                            }`}
                    >
                        {page}
                    </span>
                );
            }
        });

        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-center mt-4  ">
            <div className="flex items-center justify-center mt-4 mb-10 ">
                <button className='flex border m-2 px-2 text-xl relative'><GrFormPrevious className='m-1 ' />Previous</button>
                {renderPageNumbers()}
                <button className='flex border m-2 px-2 text-xl'>Next<MdNavigateNext className='m-1' /></button>

            </div>



        </div>
    );
};

export default Pagination;
