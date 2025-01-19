import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import banner1 from '../../../assets/images/1.jpg';
import banner2 from '../../../assets/images/2.jpg';
import banner3 from '../../../assets/images/3.jpg';
import banner4 from '../../../assets/images/4.jpg';
import banner5 from '../../../assets/images/5.jpg';
import banner6 from '../../../assets/images/6.jpg';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div>
                    <div
                        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `url(${banner1})`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                            <h1 className="font-mont text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                Welcome to Car Doctor
                            </h1>
                            <p className="font-cant text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
                                The ultimate care for your car needs
                            </p>
                            <button className="bg-lime-500 text-black px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-black transition duration-300">
                                Explore Services
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div>
                    <div
                        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `url(${banner2})`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                            <h1 className="font-mont text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                Professional Maintenance
                            </h1>
                            <p className="font-cant text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
                                Trust us to keep your vehicle in perfect condition
                            </p>
                            <button className="bg-lime-500 text-black px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-black transition duration-300">
                                View Packages
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div>
                    <div
                        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `url(${banner3})`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                            <h1 className="font-mont text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                Customer Satisfaction Guaranteed
                            </h1>
                            <p className="font-cant text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
                                Your happiness is our priority
                            </p>
                            <button className="bg-lime-500 text-black px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-black transition duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Slide 4 */}
                <div>
                    <div
                        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `url(${banner4})`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                            <h1 className="font-mont text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                Innovative Solutions
                            </h1>
                            <p className="font-cant text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
                                Experience the latest in car maintenance technology
                            </p>
                            <button className="bg-lime-500 text-black px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-black transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide 5 */}
                <div>
                    <div
                        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `url(${banner5})`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                            <h1 className="font-mont text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                Certified Mechanics
                            </h1>
                            <p className="font-cant text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
                                Trustworthy experts for all your car needs
                            </p>
                            <button className="bg-lime-500 text-black px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-black transition duration-300">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Slide 6 */}
                <div>
                    <div
                        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `url(${banner6})`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                            <h1 className="font-mont text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                Quality You Can Rely On
                            </h1>
                            <p className="font-cant text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
                                Making every drive safe and comfortable
                            </p>
                            <button className="bg-lime-500 text-black px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-black transition duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
