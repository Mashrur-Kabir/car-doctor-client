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
        <div className="mt-8 relative w-full min-h-screen overflow-hidden rounded-lg">
            <Slider {...settings}>
                {/* Slides */}
                {[banner1, banner2, banner3, banner4, banner5, banner6].map((banner, index) => (
                    <div key={index}>
                        <div
                            className="min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center relative"
                            style={{
                                backgroundImage: `url(${banner})`,
                            }}
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>

                            {/* Content */}
                            <div className="relative z-10 bg-black bg-opacity-50 p-6 rounded-lg">
                                <h1 className="font-mont text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                    {/* Dynamic headings based on slide */}
                                    {index === 0 && "Welcome to Car Doctor"}
                                    {index === 1 && "Professional Maintenance"}
                                    {index === 2 && "Customer Satisfaction"}
                                    {index === 3 && "Innovative Solutions"}
                                    {index === 4 && "Certified Mechanics"}
                                    {index === 5 && "Quality You Can Rely On"}
                                </h1>
                                <p className="font-cant text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
                                    {/* Dynamic descriptions based on slide */}
                                    {index === 0 && "The ultimate care for your car needs"}
                                    {index === 1 && "Trust us to keep your vehicle in perfect condition"}
                                    {index === 2 && "Your happiness is our priority"}
                                    {index === 3 && "Experience the latest in car maintenance technology"}
                                    {index === 4 && "Trustworthy experts for all your car needs"}
                                    {index === 5 && "Making every drive safe and comfortable"}
                                </p>
                                <button className="bg-lime-500 text-black px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-black transition duration-300">
                                    {index === 0 && "Explore Services"}
                                    {index === 1 && "View Packages"}
                                    {index === 2 && "Contact Us"}
                                    {index === 3 && "Learn More"}
                                    {index === 4 && "Book Appointment"}
                                    {index === 5 && "Get Started"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
