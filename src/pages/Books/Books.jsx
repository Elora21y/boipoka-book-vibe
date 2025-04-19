import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({books , handleSearch}) => {

    const [search , setSearch] = useState("")
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
    <div className="my-20">
      <h2 className="text-center text-4xl font-bold font-playfair mb-5">
        Books
      </h2>

      <form onSubmit={(e) => {
        handleSearch(e, search)
        setSearch('')
      }} className="text-center my-6">
        <label className="input mr-2 ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input value={search} type="search" placeholder="Search" onChange={(e)=> setSearch(e.target.value)} />
        </label>
        <button type="submit" className="btn btn-info">Search</button>
      </form>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
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
