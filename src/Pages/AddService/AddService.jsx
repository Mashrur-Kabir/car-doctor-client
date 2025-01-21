import checkout from '../../assets/images/checkout.png'
const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="my-12">
      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-48 md:h-64 lg:h-80 rounded-lg" style={{ backgroundImage: `url(${checkout})` }}>
        <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mont">Add New Service</h1>
          <div className="mt-4 px-4 py-1 bg-lime-500 cursor-pointer hover:bg-black transition duration-200 text-white font-cant font-semibold text-sm md:text-base rounded-md shadow-md">
            Home / Service
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center mt-12 font-mont">
        <form onSubmit={handleSubmit} className="bg-gray-100 shadow-lg rounded-lg p-8 w-full max-w-4xl space-y-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">Service Name</label>
              <input
                type="text"
                name='name'
                placeholder="Text here"
                className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">Service Price</label>
              <input
                type="number"
                name='price'
                placeholder="Enter price"
                className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">Service Type</label>
              <input
                type="text"
                name='type'
                placeholder="Enter type"
                className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">Additional Info</label>
              <input
                type="text"
                name='additionalInfo'
                placeholder="Text here"
                className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
              />
            </div>
          </div>

          {/* Textarea for Product Description */}
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">Product Description</label>
            <textarea
              name='description'
              placeholder="Enter description"
              className="w-full px-4 py-2 border font-cant rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 h-28 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-1/3 font-cant bg-lime-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
