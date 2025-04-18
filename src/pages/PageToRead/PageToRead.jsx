import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookList } from '../../utilities/addToLocalStore';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PageToRead = () => {
    const books = useLoaderData()
    const [readBooks, setReadBook] = useState([])
   

    useEffect(() => {

        const sortedReadBooks = getBookList()
        // const convertToNumber = ;
        // console.log(sortedReadBooks)
        const readBookList = books.filter(book => sortedReadBooks.includes(book.bookId))
        // console.log(readBookList)
        setReadBook(readBookList)

    }, []);

    // console.log(readBooks)

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'skyblue','gold'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className=" flex flex-col justify-center items-center ">
            <div className='overflow-x-scroll bg-base-200 rounded-2xl md:p-10 lg:p-16 max-w-11/12 mx-auto my-15'>
            <div className=" w-[1000px] h-[600px]">
              {
                readBooks.length === 0 ? <div className='text-7xl text-center'> Added read books</div> :
                <ResponsiveContainer width='100%' height='100%'>
                     <BarChart 
                         data={readBooks}
                         margin={{
                             top: 20,
                             right: 30,
                             left: 20,
                             bottom: 50,
                         }}>
                         <CartesianGrid strokeDasharray={'5 5'} />
                         <XAxis dataKey={'bookName'} angle={-45} textAnchor='end ' interval={0} className='text-xs z-10'></XAxis>
                         <YAxis></YAxis>
                         <Bar dataKey={'totalPages'} fill="#8884d8" shape={<TriangleBar></TriangleBar>} label={{ position: 'top' }}>
                             {readBooks.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={colors[index]}></Cell>
                             ))}
                         </Bar>
                     </BarChart>
                 </ResponsiveContainer>
              }
                </div>
            </div>
        </div>
    );
};

export default PageToRead;