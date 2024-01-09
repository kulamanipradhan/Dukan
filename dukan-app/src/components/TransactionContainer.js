import React from 'react'
import TransactionFilter from './TransactionFilter'
import TransactionTable from './TransactionTable'

const TransactionContainer = () => {
    return (
        <div className='ml-12 mt-5 bg-white mr-14'>
            <TransactionFilter />
            <TransactionTable />
        </div>
    )
}

export default TransactionContainer