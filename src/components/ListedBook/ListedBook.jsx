import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../Utility/addToBd';
import Book from '../Book/Book';
import { IoArrowDownOutline } from "react-icons/io5";



const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState([]);
    const booksData = useLoaderData();

    useEffect(() => {
        const storedRedList = getStoredReadList();
        const storedRedListInt = storedRedList.map((id) => parseInt(id));
        const readBookList = booksData.filter((book) => storedRedListInt.includes(book.bookId));
        setReadList(readBookList);

        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map((id) => parseInt(id));
        const wishBookList = booksData.filter((wish) => storedWishListInt.includes(wish.bookId));
        console.log(wishBookList);
        setWishList(wishBookList);
    }, []);

    const handleSort = (sortType) => {
        setSort(sortType);

        if(sortType === 'Rating'){
            const sortedList = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedList);
            setWishList(sortedList);
        }
        if(sortType === 'Number of Page'){
            const sortedList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedList);
            setWishList(sortedList);
        }
        if(sortType === 'Publisher year'){
            const sortedList = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedList);
            setWishList(sortedList);
        }
    }

    return(
        <div className='max-w-5xl mx-auto'>
            <div className='bg-gray-100 w-full text-center rounded-md py-4 my-6'>
                <h2 className='font-semibold text-base lg:text-xl'>Books</h2>
            </div>
            <div className='text-center'>
                <button className="btn btn-active btn-error text-white" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                {
                    sort ? `Sort by ${sort}`  : 'Sort by'
                }
                <IoArrowDownOutline className='text-lg'/>
                </button>
                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
                <li onClick={() => handleSort('Number of Page')}><a>Number of Page</a></li>
                <li onClick={() => handleSort('Publisher year')}><a>Publisher year</a></li>
                </ul>
            </div>
            <Tabs className='my-10 '>
                <TabList>
                <Tab>Read Book</Tab>
                <Tab>Wishlist Book</Tab>
                </TabList>
                <TabPanel>
                <h2 className='text-center text-rose-500'>Read Book - {readList.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {
                        readList.map((book) => <Book key={book.id} book={book}></Book>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <h2 className='text-center text-rose-500'>Wishlist - {wishList.length}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                        {
                            wishList.map((book) => <Book key={book.id} book={book}/>)
                        }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ListedBook;