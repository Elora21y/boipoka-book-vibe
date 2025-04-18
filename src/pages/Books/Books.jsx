import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';

const Books = () => {
    const books = useLoaderData()
    // console.log(books)

    // const [allBook , setAllBook] = useState([]);
    // const [loading , setLoading] = useState(false)
    // useEffect( ()=> {
    //    const booksData = async() =>{
    //     setLoading(true)
    //     const response = await fetch('booksData.json');
    //     const data = await response.json();
    //     setAllBook(data)
    //     setLoading(false)
    //    }
    //    booksData()
    // },[])
    // console.log(allBook)

    // const booksPromise = fetch('booksData.json').then(res => res.json())
    return (
        <div className='my-20'>
            <h2 className='text-center text-4xl font-bold font-playfair mb-5'>Books</h2>
         
               <div className=" grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
               {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
               </div>
            

            {/* <Suspense fallback={<div>Loadings......</div>}>
                <Book booksPromise ={booksPromise}></Book>
            </Suspense> */}

            {/* {loading && <span className='text-4xl'>Loadings.......</span>}
            {
                allBook.map(book => <Book key={book.bookId} book ={book}></Book>)
            } */}
        </div>
    );
};

export default Books;