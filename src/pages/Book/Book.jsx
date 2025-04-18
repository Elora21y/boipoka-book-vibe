import React from 'react';
import { GoStar } from 'react-icons/go';
import { NavLink } from 'react-router';

const Book = ({ book }) => {
    // console.log(book)

    const {bookId, bookName, tags, rating, image, author, category } = book
    return (
        <NavLink to = {`/book-details/${bookId}`}>
            <div className='border border-gray-200 p-6 rounded-lg flex h-full'>
                <div className="card flex-1 ">
                    <figure className=' bg-base-300 py-5 rounded-lg mb-6'>
                        <img
                            className='h-40'
                            src={image}
                            alt="Book" />
                    </figure>
                    <div className="space-y-4">
                        <div >
                            {
                                tags.map((tag, index) => <button key={index} className='py-1 px-4 rounded-2xl bg-base-200 text-[#23BE0A] mr-5'>{tag}</button>)
                            }
                        </div>
                        <h3 className='font-playfair text-2xl font-bold'>{bookName}</h3>
                        <p className='font-semibold'>By : {author}</p>
                        <div className="border-t flex justify-between font-semibold items-center pt-4"
                         style={{
                            borderImage: "repeating-linear-gradient(to right, #D1D5DB 0 6px, transparent 6px 12px) 1",
                            borderImageSlice: 1
                          }}>
                            <p>{category}</p>
                            <p>{rating} <GoStar className='inline' size={20} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Book;