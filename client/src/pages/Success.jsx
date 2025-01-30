import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-100 text-center">
            <FaCheckCircle className="text-green-500 text-6xl sm:text-7xl md:text-8xl mb-4" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">
                Your payment has been successfully completed
            </h1>
            <Link 
                to="/" 
                className="text-blue-500 text-lg sm:text-xl mt-2 hover:underline"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default Success;
