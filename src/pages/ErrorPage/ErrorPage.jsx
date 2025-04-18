import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className="text-6xl font-bold text-blue-500"> 404</h1>
            <p className='text-4xl font-semibold text-blue-900'>Page Not Found</p>
            <img className='bg-transparent' src="https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-illustration-download-in-svg-png-gif-file-formats--page-error-404-empty-state-pack-user-interface-illustrations-5210416.png?f=webp" alt="" />
        </div>
    );
};

export default ErrorPage;