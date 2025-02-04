import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () =>{
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return(
        <div>
            <h2 className="text-center font-bold text-2xl pb-7">Books</h2>
                <div className="grid grid-cols-3 gap-4">
                    {
                        books.map((book) => <Book key={book.id} book={book}/>)
                    }
                </div>
        </div>
    );
};

export default Books;