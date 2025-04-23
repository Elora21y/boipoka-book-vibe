import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useInView } from "react-intersection-observer";

const Books = ({ books, handleSearch }) => {

  const [search, setSearch] = useState("");
  // console.log(books)

  const { ref, inView } = useInView({
     // one time animation
    threshold: 0.5, // 50% of the element is visible
  });

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

      <form
        onSubmit={(e) => {
          handleSearch(e, search);
          setSearch("");
        }}
        className="text-center my-6"
      >
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
          <input
            value={search}
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-info">
          Search
        </button>
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

      <div  ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-6 rounded-2xl shadow space-y-4 " >
          <h1 className="text-5xl md:text-6xl font-bold">
            {inView &&  <CountUp  start={0}
          end={10000}
          duration={5} />}
           +
          </h1>
          <p className="text-gray-500 text-2xl">Total Doctors</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
          {inView &&  <CountUp  start={0}
          end={456}
          duration={5} />}
           +
          </h1>
          <p className="text-gray-500 text-2xl">Total Reviews</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
          {inView &&  <CountUp  start={0}
          end={1900}
          duration={5} />}
           +
          </h1>
          <p className="text-gray-500 text-2xl">Patients</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
          {inView &&  <CountUp  start={0}
          end={300}
          duration={5} />}
           +
          </h1>
          <p className="text-gray-500 text-2xl">Total Stuffs</p>
        </div>
      </div>
           
    </div>
  );
};

export default Books;
