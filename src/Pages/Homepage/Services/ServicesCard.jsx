import { TiArrowRightThick } from "react-icons/ti";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border group">
      {/* Service Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Service Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 font-mont">{title}</h2>
        <p className="text-green-600 mt-1 text-sm font-semibold font-cant">
          Price: ${price}
        </p>

        {/* Arrow Icon */}
        <div className="flex justify-end mt-2">
          <Link to={`/checkout/${_id}`}>
            <button className="flex items-center border-2 border-green-500 rounded-md px-1">
              <p className="font-cant mr-1 font-bold text-lime-500 hover:text-green-600 text-sm">Book</p> <TiArrowRightThick className="text-lime-500 text-2xl hover:text-green-600 transition duration-150" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};

export default ServicesCard;
