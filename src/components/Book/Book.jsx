import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({book}) =>{
    const {bookName, author, image, 
            review, totalPages, bookId,
            rating, category,
            tags, publisher,
            yearOfPublishing} = book;
    return(
        <div className="card bg-base-100 py-5 border border-gray-200 px-6">
            <figure className="bg-gray-100 rounded-lg py-6">
                <img 
                className="w-32 h-52 rounded-md"    
                src={image}
                alt="Shoes" />
            </figure>
            <div className="">
                <div className="flex gap-3 py-4">
                    {tags.map((tag, idx) => <div className="bg-[#23BE0A0D] text-[#23BE0A] text-sm rounded-full px-5 py-1" key={idx}>{tag}</div>)}
                </div>
                <h2 className="card-title pb-2"> {bookName}</h2>
                <div className="text-sm space-y-1 flex flex-col pb-3">
                    <p>By <span className="border-dotted border-b border-gray-400">{author}</span></p>
                    <p>Page: {totalPages}</p>
                    <p>Publisher: <span className="font-semibold text-sm">{publisher}</span></p>
                    <p>Publish Date: <span className="font-semibold text-sm">{yearOfPublishing}</span></p>
                </div>
                <div className="flex justify-between items-center border-t border-dashed border-gray-400 pt-3 text-sm">
                    <div className="font-semibold">{category}</div>
                    <div className="bg-[#23BE0A] text-white text-sm rounded-full px-4 py-1"><Link to={`/books/${bookId}`}>Book Details</Link></div>
                    <div className="flex justify-center items-center gap-2">
                        <div>{rating}</div>
                        <CiStar className="text-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Book;