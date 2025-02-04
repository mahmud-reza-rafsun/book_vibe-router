const Book = ({book}) =>{
    const {bookName, author, image, 
            review, totalPages,
            rating, category,
            tags, publisher,
            yearOfPublishing} = book;
    return(
        <div className="card bg-base-100 py-6 shadow-lg">
            <figure>
                <img 
                className="w-32 rounded-md"
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    )
};

export default Book;