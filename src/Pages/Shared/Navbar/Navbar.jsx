import { useState } from "react";
import car from '../../../assets/icons/car.png';
import shop from '../../../assets/icons/shop.png';
import search from '../../../assets/icons/magnifier.png';
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white font-cant">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src={car}
                        alt="Car Doctor Logo"
                        className="w-12 h-12"
                    />
                    <h1 className="text-2xl font-bold font-pluto">Car Doctor</h1>
                </div>

                {/* Hamburger Icon */}
                <div className="lg:hidden relative">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-400 hover:text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div
                            className="absolute left-[-45px] top-full mt-2 bg-black text-white rounded-md shadow-lg z-50 animate-slide-down w-[110px]"
                        >
                            <ul className="flex flex-col items-center space-y-2 px-4 py-4 ">
                                <li className="hover:bg-lime-500 transition-colors duration-300 rounded-md px-2 py-1">
                                    <NavLink
                                        to='/'
                                        className="block text-gray-300 hover:text-black"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="hover:bg-lime-500 transition-colors duration-300 rounded-md px-2 py-1">
                                    <NavLink
                                        to=''
                                        className="block text-gray-300 hover:text-black"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="hover:bg-lime-500 transition-colors duration-300 rounded-md px-2 py-1">
                                    <NavLink
                                        to=''
                                        className="block text-gray-300 hover:text-black"
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li className="hover:bg-lime-500 transition-colors duration-300 rounded-md px-2 py-1">
                                    <NavLink
                                        to=''
                                        className="block text-gray-300 hover:text-black"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li className="hover:bg-lime-500 transition-colors duration-300 rounded-md px-2 py-1">
                                    <NavLink
                                        to=''
                                        className="block text-gray-300 hover:text-black"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Navbar Links for Larger Screens */}
                <div className="hidden lg:flex md:space-x-8 md:items-center">
                    <ul className="flex space-x-8">
                        <li>
                            <NavLink
                                to='/'
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=''
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=''
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=''
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=''
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-5">
                    <button><img className="w-6 h-6" src={shop} alt="" /></button>
                    <button><img className="w-6 h-6" src={search} alt="" /></button>
                    <button className="app px-4 py-2 border rounded-lg text-gray-300 hover:text-white">Appointment</button>                   
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
