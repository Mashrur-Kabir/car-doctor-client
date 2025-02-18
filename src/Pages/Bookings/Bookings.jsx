import { useContext, useEffect, useState } from "react";
import checkout from "../../assets/images/checkout.png";
import { AuthContext } from "../../providers/AuthProvider";
import edit from "../../assets/icons/writing.png";
import del from "../../assets/icons/paper-bin.png";
//import axios from "axios"; //no need, check custom hook 'useAxiosSecure.jsx';
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const axiosSecure = useAxiosSecure(); //custom hook

  //old method:
  //const url = `car-doctor-server-ten-mauve.vercel.app/bookings?email=${user?.email}`; //if there's another email it wont show them the bookings. because your token has your booking info. not someone else's. so you cant try and access other users's info.

  //DRY method by custom hooks:
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    //old
    // axios.get(url, {withCredentials: true})

    //custom hooks
    axiosSecure
      .get(url)
      .then((response) => {
        const data = response.data; // because Axios automatically parses JSON
        setBookings(data); // Update state with the data
      })
      .catch((error) => {
        console.log("Error fetching bookings:", error);
      });
  }, [url, axiosSecure]);

  // Handle Delete Click
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (confirmDelete) {
      fetch(`car-doctor-server-ten-mauve.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("Booking deleted successfully.");
            setBookings((prevBookings) =>
              prevBookings.filter((booking) => booking._id !== id)
            );
          }
        })
        .catch((error) => console.error("Error deleting booking:", error));
    }
  };

  //Handle Update Click
  const handleUpdateStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Approved" : "Pending";
    fetch(`car-doctor-server-ten-mauve.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Booking status updated successfully.");
          const updatedBookings = bookings.map((booking) =>
            booking._id === id ? { ...booking, status: newStatus } : booking
          );
          setBookings(updatedBookings);
        }
      })
      .catch((error) => console.error("Error updating status:", error));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-48 md:h-64 lg:h-80 rounded-lg shadow-md"
        style={{ backgroundImage: `url(${checkout})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mont">
            Bookings
          </h1>
          <div className="mt-4 px-4 py-1 bg-lime-500 cursor-pointer hover:bg-black transition duration-300 text-white font-cant font-semibold text-sm md:text-base rounded-md shadow-md">
            Home / Bookings
          </div>
        </div>
      </div>

      {/* Bookings Table Section */}
      <div className="container mx-auto mt-10 px-4">
        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-black font-mont">
                  <th className="px-4 py-2 text-left text-white font-semibold">
                    Service
                  </th>
                  <th className="px-4 py-2 text-left text-white font-semibold">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left text-white font-semibold">
                    Customer
                  </th>
                  <th className="px-4 py-2 text-left text-white font-semibold">
                    Phone
                  </th>
                  <th className="px-4 py-2 text-left text-white font-semibold">
                    Email
                  </th>
                  <th className="px-4 py-2 text-center text-white font-semibold">
                    Price
                  </th>
                  <th className="px-4 py-2 text-center text-white font-semibold">
                    Status
                  </th>
                  <th className="px-4 py-2 text-center text-white font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr
                    key={booking._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-2 text-gray-800 font-cant">
                      {booking.serviceTitle}
                    </td>
                    <td className="px-4 py-2 text-gray-600 font-cant">
                      {booking.bookingDate}
                    </td>
                    <td className="px-4 py-2 text-gray-600 font-cant">
                      {booking.customerName}
                    </td>
                    <td className="px-4 py-2 text-gray-600 font-cant">
                      {booking.phone}
                    </td>
                    <td className="px-4 py-2 text-gray-600 font-cant">
                      {booking.email}
                    </td>
                    <td className="px-4 py-2 text-center text-gray-800 font-semibold font-cant">
                      ${booking.servicePrice}
                    </td>
                    <td className="px-4 py-2 text-center font-cant">
                      <button
                        onClick={() =>
                          handleUpdateStatus(booking._id, booking.status)
                        }
                        className={`px-3 py-1 rounded ${
                          booking.status === "Approved"
                            ? "bg-green-500"
                            : "bg-orange-500"
                        } text-white`}
                      >
                        {booking.status}
                      </button>
                    </td>

                    <td className="px-4 py-6 text-center font-cant flex items-center gap-3 justify-center">
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="p-2 w-10 h-10 rounded-full shadow-xl hover:bg-red-800 transition duration-300"
                      >
                        <img src={del} alt="delete" />
                      </button>
                      <button className="p-2 w-10 h-10 rounded-full shadow-xl hover:bg-purple-800 transition duration-300">
                        <img src={edit} alt="edit" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-8">No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

/*
The need to use JWT for api in server-side.
this booking api is initially open to all users
this means that anyone can access the booking API by copying request url from your browser

To protect the booking API, you would need to add JWT middleware to your Express server.
You can look it up in the server file of this project to look at the implementation
*/
