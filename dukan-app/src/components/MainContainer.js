import React from "react";
import Header from "./Header";
import Overview from "./Overview";
import TransactionHeading from "./TransactionHeading";
import TransactionContainer from "./TransactionContainer";

const MainContainer = () => {
    return (
        <div className="w-[100%] bg-gray-100">
            <Header />
            <Overview />
            <TransactionHeading />
            <TransactionContainer />
        </div>
    );
};

export default MainContainer;
