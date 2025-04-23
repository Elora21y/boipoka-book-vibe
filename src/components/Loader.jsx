import React from 'react';

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <span className=" loading loading-spinner loading-xl text-gray-500"></span>
        </div>
    );
};

export default Loader;