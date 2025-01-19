import car from '../../../assets/icons/car.png'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 gap-8 md:flex items-center justify-between">
                {/* Logo and Description */}
                <div>
                    <div className="flex flex-col items-start gap-2 mb-4">
                        <img
                            src={car}
                            alt="CarDoctor Logo"
                            className="w-12 h-12"
                        />
                        <h2 className="text-2xl font-pluto">Car Doctor</h2>
                    </div>
                    <p className="font-cant">
                        Edwin Diaz is a software and web technologies engineer, a
                        life coach trainer who is also a serial.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-google text-sm"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                {/* Other parts */}
                <div className='md:flex items-start gap-12'>
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-mont">About</h3>
                        <ul className="space-y-2 font-cant">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className='my-6 md:my-0'>
                        <h3 className="text-lg font-bold mb-4 font-mont">Company</h3>
                        <ul className="space-y-2 font-cant">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Why Car Doctor
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-mont">Support</h3>
                        <ul className="space-y-2 font-cant">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Support Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Feedback
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
