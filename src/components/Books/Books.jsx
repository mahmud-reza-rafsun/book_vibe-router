import { useEffect, useState } from "react";

const Books = () =>{
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return(
        <div>
            <h2>hello form books</h2>
            <h3>{books.length}</h3>
        </div>
    );
};

export default Books;