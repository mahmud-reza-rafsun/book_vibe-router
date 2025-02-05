import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utility/addToBd';
import Book from '../Book/Book';

const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const booksData = useLoaderData();

    useEffect(() => {
        const storedRedList = getStoredReadList();
        const storedRedListInt = storedRedList.map((id) => parseInt(id));
        const readBookList = booksData.filter((book) => storedRedListInt.includes(book.bookId));
        setReadList(readBookList);
    }, []);

    return(
        <div>
            <div className='bg-gray-100 w-full text-center rounded-md py-4 my-6'>
                <h2 className='font-semibold text-xl'>Books</h2>
            </div>
            <Tabs className='my-10'>
                <TabList>
                <Tab>Read Book</Tab>
                <Tab>Wishlist Book</Tab>
                </TabList>
                <TabPanel>
                <h2>Read Book: {readList.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {
                        readList.map((book) => <Book key={book.id} book={book}/>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <h2>Wishlist Book</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ListedBook;