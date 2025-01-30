import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cancel = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-100 text-center">
            <FaTimesCircle className="text-red-500 text-6xl sm:text-7xl md:text-8xl mb-4" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">
                Sorry, your transaction was cancelled.
            </h1>
            <Link 
                to="/" 
                className="text-blue-500 text-lg sm:text-xl mt-2 hover:underline"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default Cancel;
