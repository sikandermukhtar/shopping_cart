import {MenuProvider} from "../../contexts/index.js";
import {useState} from "react";
import Navbar from "./Navbar.jsx";
import MenuSlider from "./MenuSlider.jsx";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return(
        <MenuProvider value={{isMenuOpen, toggleMenu}}>
            <div className='flex'>
                <Navbar/>
                <MenuSlider/>
            </div>
        </MenuProvider>
    )
}