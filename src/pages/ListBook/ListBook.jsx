import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBookList, getWishList } from '../../utilities/addToLocalStore';
import ReadList from '../ReadList/ReadList';
import { IoIosArrowDown } from 'react-icons/io';

const ListBook = () => {
    const books = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    const [wishList, setWishList] = useState([])
    const [sorted, setSorted] = useState('');

    useEffect(() => {
        const storedReadBook = getBookList()
        // console.log(storedReadBook)
        const convertToNumber = storedReadBook.map(id => parseInt(id))
        // console.log(convertToNumber)
        const readBookList = books.filter(book => convertToNumber.includes(book.bookId))
        // console.log(readBookList)
        setReadBook(readBookList)
    }, []);

    useEffect(() => {
        const storeWishList = getWishList()
        const wishList = books.filter(book => storeWishList.includes(book.bookId))
        setWishList(wishList)
    }, [])

    const sortedType = (type) => {
        //     setSorted(type)
        //     if(type === 'Rating'){
        //         const sortedByRating = [...readBook].sort((a,b) => b.rating - a.rating) ;
        //         setReadBook(sortedByRating)
        //         const sortedByRating2 = [...wishList].sort((a,b) => b.rating - a.rating) ;
        //         setWishList(sortedByRating2)
        //     }
        //     else if(type === 'Pages'){
        //         const sortedByPages = [...readBook].sort((a,b) => b.totalPages - a.totalPages) ;
        //         setReadBook(sortedByPages)
        //         const sortedByPages2 = [...wishList].sort((a,b) => b.totalPages - a.totalPages) ;
        //         setWishList(sortedByPages2)
        //     }
        //    else if(type === 'Year'){
        //         const sortedByYear = [...readBook].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing) ;
        //         setReadBook(sortedByYear)
        //         const sortedByYear2 = [...wishList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing) ;
        //         setWishList(sortedByYear2)
        //     }
        setSorted(type)
        const sortFunction = {
            Rating: (a, b) => b.rating - a.rating,
            Pages: (a, b) => b.totalPages - a.totalPages,
            Year: (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        }
        const sortfn = sortFunction[type]
        if (!sortfn) return;

        setReadBook(prev => [...prev].sort(sortfn))
        setWishList(prev => [...prev].sort(sortfn))
    }

    return (
        <div className='w-11/12 mx-auto my-15'>

            <div className="bg-base-200 rounded-lg py-8 my-5">
                <h2 className='text-center text-2xl font-bold '>Books</h2>
            </div>

            <div className="flex flex-col justify-center items-center mb-16">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white hover:text-[#23BE0A] hover:bg-white hover:border-[#23BE0A]">Sort By {
                        sorted ? `: ${sorted}` : <IoIosArrowDown size={20} />
                    }</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => sortedType('Rating')}>Rating</a></li>
                        <li><a onClick={() => sortedType('Pages')}>Number of pages</a></li>
                        <li><a onClick={() => sortedType('Year')}>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList className='text-gray-500 border-b'>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel >
                    {
                        readBook.map(book => <ReadList key={book.bookId} book={book}></ReadList>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishList.map(list => <ReadList key={list.bookId} book={list}></ReadList>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListBook;