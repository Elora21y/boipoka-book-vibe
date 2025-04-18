import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { addBookList, addWishList } from '../../utilities/addToLocalStore';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

const BookDetails = () => {
    const navigate = useNavigate()
    const books = useLoaderData()

    const { bookId } = useParams()
    const id = parseInt(bookId)
    
    // console.log(typeof books)
    // console.log(id)

    const singleBook = books.find(book => book.bookId === id)
    // console.log(singleBook)
    const { bookName, tags, rating, image, publisher, category, review, totalPages, yearOfPublishing, author } = singleBook;

    function handleAddList(id) {
        // console.log(id)
        addBookList(id)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your book has been added Read List",
            showConfirmButton: false,
            timer: 1500
          });
    }
    const handleWishList = id =>{
        toast.success('Successfully Added in Wish List')
        addWishList(id)
    }

    return (
        <div className="my-16 mx-auto w-11/12">
            <button onClick={() => navigate(-1)} className='btn btn-ghost rounded-full'> <IoMdArrowRoundBack className='text-left' size={30} /></button>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 '>

                <figure className='bg-base-200 p-10 rounded-lg'>
                    <img className='rounded-lg md:w-[75%] lg:w-[1600px]' src={image} alt="Book" />
                </figure>

                <div className="space-y-4">

                    <div>
                        <h1 className='font-bold text-3xl font-playfair'>{bookName}</h1>
                        <p className='font-medium text-xl'>By : {author}</p>
                    </div>

                    <p className='border-y border-gray-300 py-3'>{category}</p>
                    <p><span className='font-semibold'>Review</span> : <small className='text-gray-600'>{review} </small></p>

                    <p className='border-b border-gray-300 pb-5'><span className='font-semibold'>Tag</span> :
                        {
                            tags.map((tag, index) => <button key={index} className='py-1 px-4 rounded-2xl bg-base-200 text-[#23BE0A] ml-4'>#{tag}</button>)
                        }
                    </p>

                    <table className='table-auto text-left'>
                        <tbody>

                            <tr>
                                <th>Number of Pages : </th>
                                <td>{totalPages}</td>
                            </tr>

                            <tr>
                                <th>Publisher :</th>
                                <td>{publisher}</td>
                            </tr>

                            <tr>
                                <th>Year of Publishing :</th>
                                <td>{yearOfPublishing}</td>
                            </tr>

                            <tr>
                                <th>Rating :</th>
                                <td>{rating}</td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="">
                        <button onClick={() => handleAddList(singleBook.bookId)} className='btn border border-gray-300 mr-4'>Read</button>
                        <button onClick={() => handleWishList(singleBook.bookId)} className='btn btn-info text-white '>Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;