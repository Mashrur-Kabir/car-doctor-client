import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  // Fetching services data from an local API
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-20">
      <div className="text-center">
        <h2 className="text-xl font-bold font-mont">Our Services</h2>
        <h2 className="text-5xl font-bold font-mont mt-2 mb-4">Our Service Area</h2>
        <p className="text-gray-700 font-cant">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-lime-500 text-black px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-black transition duration-300">
            View All Services
        </button>
      </div>
    </div>
  );
};

export default Services;
