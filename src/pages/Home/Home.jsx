import React, { useState } from 'react';
import Banner from './Banner';
import Books from '../Books/Books';
import { useLoaderData } from "react-router";


const Home = () => {
    const data = useLoaderData();
    const [books , setBooks] =useState(data)

    const handleSearch = (e, text)=>{
      e.preventDefault()
      if(text == '') return setBooks(data)
    //   console.log(text)
    const searchBooks = data.filter(book => book.bookName.toLowerCase().split(' ').includes(text.toLowerCase()))
    // console.log(searchBooks)
    setBooks(searchBooks)
    }
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Books books = {books} handleSearch={handleSearch}></Books>
        </div>
    );
};

export default Home;