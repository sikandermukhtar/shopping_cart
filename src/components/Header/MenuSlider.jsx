import {useMenu} from "../../contexts/index.js";
import {NavLink} from "react-router-dom";

export default function MenuSlider(){
    const {isMenuOpen, toggleMenu} = useMenu()

    return(

        <>
            <div className={`fixed top-0 right-0 z-50 h-screen bg-white ${isMenuOpen ? '' : 'hidden'} w-80 shadow-2xl lg:hidden shadow-black`}>
                <div className='px-2 py-2.5 flex justify-end'>
                    <button className='' onClick={toggleMenu}>
                        <svg aria-hidden="true" className="w-8" focusable="false" viewBox="0 0 24 24" role="img"
                             fill="black">
                            <path stroke="black" strokeWidth="1.5"
                                  d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
                        </svg>
                    </button>
                </div>
                <div className='mt-20'>
                    <ul className='flex flex-col text-3xl font-medium font-sans gap-y-3 items-center'>
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
                <hr className='mt-32'></hr>
                <div className='flex flex-row justify-center mt-10 gap-x-2'>
                    <button>
                        <svg aria-hidden="true" className="w-8"
                             focusable="false" viewBox="0 0 24 24" role="img" fill="none"
                        >
                            <path stroke="black" strokeWidth="1.5"
                                  d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                        </svg>
                    </button>
                    <p className='text-xl text-black font-sans font-medium'>Bag</p>
                </div>

            </div>
        </>
    )
}