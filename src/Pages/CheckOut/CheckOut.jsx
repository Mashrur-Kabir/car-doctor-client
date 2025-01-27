import { useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout.png";
import "aos/dist/aos.css";
import { useState, useEffect, useContext } from "react";
import AOS from "aos";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData(); // Loading the card with needed information for the checkout page
  const { title, description, price, img, _id } = service;
  const { user } = useContext(AuthContext);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const phone = form.phone.value;
    const date = form?.date.value;
    const message = form?.message.value;
    const booking = {
      customerName: name,
      email,
      phone,
      img,
      bookingDate: date,
      serviceTitle: title,
      servicePrice: price,
      serviceId: _id,
      customerNotice: message,
    };
    console.log(name, email, phone, date, message, booking);

    //send this to backend server and database
    fetch("car-doctor-server-ten-mauve.vercel.app/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Booking confirmed successfully:", data);
        if (data.insertedId) {
          alert("Booking confirmed successfully!");
        }
        // Reset form
        form.reset();
      })
      .catch((err) => {
        console.error("Error Booking Service:", err);
        // Reset form
        form.reset();
      });
  };

  return (
    <div className="my-12">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-48 md:h-64 lg:h-80 rounded-lg"
        style={{ backgroundImage: `url(${checkout})` }}
      >
        <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mont">
            Check Out
          </h1>
          <div className="mt-4 px-4 py-1 bg-lime-500 cursor-pointer hover:bg-black transition duration-200 text-white font-cant font-semibold text-sm md:text-base rounded-md shadow-md">
            Home / Checkout
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div
        className="mt-12 mx-auto bg-white shadow-xl rounded-lg p-10 lg:flex items-center gap-4"
        data-aos="fade-up"
      >
        {/* Image */}
        <div
          className="relative overflow-hidden rounded-lg group"
          data-aos="fade-right"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-full rounded-lg transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Details */}
        <div className="pt-8" data-aos="fade-left">
          <h2 className="text-2xl font-bold font-mont text-gray-800">
            {title}
          </h2>
          <p className="text-lg font-semibold text-lime-600 mt-2">
            Price: <span className="text-gray-800">${price}</span>
          </p>

          {/* Collapsible Description */}
          <div className="mt-4">
            <div
              className="text-gray-600 font-cant cursor-pointer flex items-center justify-between bg-gray-200 p-2 rounded-md md:hidden"
              onClick={toggleDescription}
            >
              <span>Description</span>
              <span className="text-lg">{isDescriptionOpen ? "▲" : "▼"}</span>
            </div>
            <p
              className={`text-gray-600 text-justify font-cant mt-2 md:block ${
                isDescriptionOpen ? "block" : "hidden"
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center mt-12 font-mont">
        <form
          onSubmit={handleBooking}
          className="bg-gray-100 shadow-lg rounded-lg p-8 w-full max-w-4xl space-y-6"
        >
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                defaultValue={user?.name}
                placeholder="Your Name"
                className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Date of Booking
              </label>
              <input
                required
                type="date"
                name="date"
                placeholder="Date of Booking"
                className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Your Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Your Email
              </label>
              <input
                required
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
              />
            </div>
          </div>

          {/* Textarea for Message */}
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 h-28 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-1/3 font-cant bg-lime-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
