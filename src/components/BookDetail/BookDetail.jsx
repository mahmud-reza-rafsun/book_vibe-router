import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../Utility/addToBd";

const BookDetail = () =>{
const {bookId} = useParams();
    const data = useLoaderData();

    const id = parseInt(bookId);
    const book = data.find((book) => book.bookId === id);
    const {bookName, author, image, 
        review, totalPages, bookId: booksId,
        rating, category,
        tags, publisher,
        yearOfPublishing} = book;

    const handleMakeAsRead = (id) => {
        addToStoredReadList(id);
    }
    const handleAddToWish = (id) =>{
        addToStoredWishList(id);
    }


    return(
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-7">
                <img
                className="h-[500px] rounded-md"
                src={image} />
                <div>
                    <h2 className="card-title"> {bookName}</h2>
                    <p>By: <span className="">{author}</span></p>
                    <div className="font-semibold border-t border-b border-gray-400 my-3 py-1">{category}</div>
                    <div className="text-sm">{review}</div>
                    <div className="flex gap-3 py-3">
                        Tag {tags.map((tag, idx) => <div className="bg-[#23BE0A0D] text-[#23BE0A] text-sm rounded-full px-5 py-1" key={idx}>{tag}</div>)}
                    </div>
                    <div className="text-sm space-y-1 flex flex-col pb-3">
                        <p>By: <span className="border-dotted border-b border-gray-400">{author}</span></p>
                        <p>Page: {totalPages}</p>
                        <p>Publisher: <span className="font-semibold text-sm">{publisher}</span></p>
                        <p>Publish Date: <span className="font-semibold text-sm">{yearOfPublishing}</span></p>
                        <p>Publish Date: <span className="font-semibold text-sm">{rating}</span></p>
                    </div>
                   <div className="flex gap-4">
                        <button onClick={() => handleMakeAsRead(booksId)} className="btn btn-outline">Mark as Read</button>
                        <button onClick={() => handleAddToWish(booksId)} class="btn btn-info text-white">Add to Wishlist</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;