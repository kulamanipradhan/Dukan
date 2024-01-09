import React from 'react';
import Pagination from './Pagination';


const TransactionTable = () => {
    const mockOrderData = {
        orderId: '#281209',
        orderDate: '7 July, 2023',
        orderAmount: '₹ 1228.23',
        transactionFees: '₹ 22',
    };
    // Create an array with 15 copies of the mockOrderData
    const mockDataArray = Array.from({ length: 15 }, (_, index) => ({ ...mockOrderData, orderId: `#${281209 + index}` }));

    return (
        <div>
            <div className='flex justify-between m-3 p-3 rounded-md bg-gray-100 text-xl'>
                <p>Order ID</p>
                <p>Order Date</p>
                <p>Order Amount</p>
                <p>Transaction Fees</p>
            </div>

            {mockDataArray.map((data, index) => (
                <div key={index} className='flex justify-between m-2 p-2 rounded-md text-xl'>
                    <p className='text-sky-400'>{data.orderId}</p>
                    <p>{data.orderDate}</p>
                    <p>{data.orderAmount}</p>
                    <p>{data.transactionFees}</p>
                </div>
            ))}
            <Pagination />
        </div>
    );
}

export default TransactionTable;
