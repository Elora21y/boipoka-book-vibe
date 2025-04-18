import React from 'react';

const Banner = () => {
    return (
        <div className=" my-10 bg-base-200 px-5 md:px-10 lg:px-24 py-16 rounded-lg font-playfair">
            <div className='flex flex-col-reverse md:flex-row gap-5 md:gap-10  lg:gap-28 items-center '>
            <div className="space-y-4 text-center md:text-left ">
                <h1 className='text-3xl md:text-5xl font-bold leading-14'>Books to freshen up your bookshelf</h1>
                <button className=' btn bg-[#23BE0A] text-white hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white'>View The List</button>
            </div>
            <img className='w-72 h-68 rounded-lg' src="books.jpg" alt="" />
        </div>
        </div>
    );
};

export default Banner;