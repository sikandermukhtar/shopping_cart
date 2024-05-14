import {Link, NavLink} from "react-router-dom";
import {useMenu} from "../../contexts/index.js";
import Profile from "./Profile.jsx";


export default function Navbar(){

    const {isMenuOpen,toggleMenu} = useMenu()
    const toggleMenuButton = () => {
        toggleMenu()
    };
    return(
            <>
                <header className={`z-50 sticky top-0 w-screen inset-x-0
                    ${isMenuOpen ? 'opacity-80 backdrop-blur-3xl' : '' }`}>
                    <nav className='bg-[#2E42F8] px-4 lg:px-6 py-2.5'>
                        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>

                            <div>
                                <Link to='/'>
                                    <svg viewBox="0 0 319 319" fill="none" xmlns="http://www.w3.org/2000/svg"
                                         className='w-10'
                                    >
                                        <path
                                            d="M118.135 78.8835L159.176 -6.62759e-06L202.635 78.8835L159.095 159.101L118.135 78.8835Z"
                                            fill="#03FFA3"/>
                                        <path
                                            d="M118.055 237.984L159.095 159.101L202.555 237.984L159.014 318.201L118.055 237.984Z"
                                            fill="#03FFA3"/>
                                        <path
                                            d="M78.9741 200.229L3.37131e-05 159.363L78.7872 115.729L159.1 159.092L78.9741 200.229Z"
                                            fill="#03FFA3"/>
                                        <path
                                            d="M238.074 199.957L159.1 159.092L237.888 115.458L318.201 158.82L238.074 199.957Z"
                                            fill="#03FFA3"/>
                                    </svg>
                                </Link>
                            </div>

                            <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-0 text-white'
                                 id="mobile-menu-2">
                                <ul className='flex flex-col lg:flex-row text-lg font-medium lg:space-x-8'>
                                    <li>
                                        <NavLink to="/"
                                                 className={({isActive}) =>
                                                     `${isActive} ? "text-green-300" : "text-white"`
                                                 }
                                        >
                                            Men
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/"
                                                 className={({isActive}) =>
                                                     `${isActive} ? "text-green-300" : "text-white"`
                                                 }
                                        >
                                            Women
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/"
                                                 className={({isActive}) =>
                                                     `${isActive} ? "text-green-300" : "text-white"`
                                                 }
                                        >
                                            Kids
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/"
                                                 className={({isActive}) =>
                                                     `${isActive} ? "text-green-300" : "text-white"`
                                                 }
                                        >
                                            Sale
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex gap-x-3'>

                                <Profile />

                                <button>
                                    <svg aria-hidden="true" className="w-8"
                                         focusable="false" viewBox="0 0 24 24" role="img" fill="none"
                                    >
                                        <path stroke="white" strokeWidth="1.5"
                                              d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                                    </svg>
                                </button>
                                <button onClick={toggleMenuButton} className="block lg:hidden">
                                    <svg aria-hidden="true" className="w-8" focusable="false"
                                         viewBox="0 0 24 24" role="img" fill="white">
                                        <path stroke="white" strokeWidth="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
    )
}
