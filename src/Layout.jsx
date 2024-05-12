import {Outlet} from 'react-router-dom';
import Navbar from "./components/Header/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

export default function Layout(){
    return(
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}