import { NavLink } from "react-router-dom";

const Navbar = () => {
    const name = <>
        <NavLink to={`/`} ><li><a>Home</a></li></NavLink>
        <NavLink to={`/listed-book`}><li><a>Listed Book</a></li></NavLink>
        <li><a>Page to Read</a></li>
    </>
    return(
        <div className="navbar sticky top-0 z-10 backdrop-blur-md">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {name}
                </ul>
                </div>
                <a className="font-semibold cursor-pointer text-xl lg:text-2xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 hover:bg-green">
                {name}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a className="btn btn-primary text-white">Sign in</a>
                <a className="btn btn-info text-white">Sign up</a>
            </div>
        </div>

    )
};

export default Navbar;