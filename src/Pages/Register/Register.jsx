import Lottie from "lottie-react";
import registerAni from '../../assets/animations/registerAni.json';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    //call firebase methods
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log("User created successfully:", user);
    })
    // Handle errors
    .catch(error => {
        console.error("Error creating user:", error);
    });
  }

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Left Section - Registration Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-mont">Register</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-bold text-gray-600 font-cant mb-1">Name</label>
              <input
                type="text"
                name='name'
                placeholder="Your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-gray-600 font-cant mb-1">Email</label>
              <input
                type="email"
                name='email'
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-bold text-gray-600 font-cant mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-bold text-gray-600 font-cant mb-1">Confirm Password</label>
              <input
                type="password"
                name='password'
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            {/* Register Button */}
            <div>
              <button
                type="submit"
                className="w-full font-cant font-bold bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-150"
              >
                Register
              </button>
            </div>
          </form>

          {/* Or Register With */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm font-cant">Or Register with</p>
            <div className="flex justify-center space-x-4 mt-2">
              {/* Social Media Buttons */}
              <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-400 transition">
                <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="Facebook" className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-400 transition">
                <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-400 transition">
                <img src="https://img.icons8.com/ios-filled/50/google-logo.png" alt="Google" className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>

          {/* Already Have an Account */}
          <div className="mt-4 text-center font-cant">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-red-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="hidden md:flex md:w-1/2 bg-green-100 items-center justify-center">
          <div>
            <Lottie
              animationData={registerAni}
              loop={true}
              style={{ width: 300, height: 300 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
