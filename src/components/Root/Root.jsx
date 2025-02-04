import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () =>{
    return(
        <div className="max-w-5xl mx-auto">
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;