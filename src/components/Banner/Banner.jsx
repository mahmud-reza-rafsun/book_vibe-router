import banner from "../../assets/books.jpg";

const Banner = () => {
    return(
        <div className="hero bg-base-200 min-h-screen rounded-lg my-8 px-4 lg:px-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner    }
                className="sm:max-w-xs md:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-3xl lg:text-5xl font-semibold">Books to freshen up your bookshelf</h1>
                <button className="btn btn-success mt-4 lg:mt-8 text-white">View The List</button>
                </div>
            </div>
        </div>
    )
};

export default Banner;