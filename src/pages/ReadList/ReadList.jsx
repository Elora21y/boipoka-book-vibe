import React from 'react';
import { AiTwotoneFileText } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { GoPeople } from 'react-icons/go';

const ReadList = ({ book }) => {
    const { bookName, tags, rating, image, publisher, category, totalPages, yearOfPublishing, author } = book
    return (
       <div className="border border-gray-300 rounded-lg mt-4">
         <div className='flex gap-6 items-center p-4 '>
            <div className="bg-base-300 p-5 rounded-lg">
                <img className='h-32' src={image} alt="" />
            </div>
            <div className="w-full space-y-1">
                <h3 className='text-xl font-playfair font-semibold'>{bookName}</h3>
                <p>By : {author}</p>

               <div className="md:flex  gap-5">
               <p><span className='font-semibold'>Tag</span> :
                    {
                        tags.map((tag, index) => <button key={index} className=' rounded-2xl bg-base-200 text-[#23BE0A] ml-4 px-4'>#{tag}</button>)
                    }
                </p>
                <p><CiLocationOn  className='inline'/> Year of Publishing: {yearOfPublishing}</p>
               </div>

               <div className="flex gap-6 border-b w-full pb-2 border-gray-200">
               
               <p><GoPeople className='inline'></GoPeople> Publisher : {publisher}</p>
               <p><AiTwotoneFileText className='inline'></AiTwotoneFileText> Page: {totalPages}</p>
               
               </div>

               <div className="md:flex gap-5 text-sm mt-2">
                <button className='py-1 px-4 rounded-2xl text-[#328EFF] bg-[#328EFF15] font-medium' >Category: {category}</button>
                <button className='py-1 px-4 rounded-2xl text-[#FFAC33] bg-[#FFAC3315] font-medium' >Rating: {rating}</button>
                <button className='py-1 px-4 rounded-2xl text-white bg-[#23BE0A] font-medium' >View Details</button>
               </div>
            </div>
        </div>
       </div>
    );
};

export default ReadList;