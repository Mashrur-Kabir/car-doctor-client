import Lottie from "lottie-react";
import loginAni from '../../assets/animations/loginAni.json'
import { Link } from "react-router-dom";
const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();

    
  }

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section - Illustration */}
        <div className="hidden md:flex md:w-1/2 bg-green-100 items-center justify-center">
          <div>
            <Lottie
            animationData={loginAni}
            loop={true}
            style={{ width: 400, height: 400 }}
            />
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-mont">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-gray-600 font-cant mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-bold text-gray-600 font-cant mb-1">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
              />
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full font-cant font-bold bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-150"
              >
                Login
              </button>
            </div>
          </form>

          {/* Or Login With */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm font-cant">Or Login with</p>
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
              Have an account?{' '}
              <Link to="/register" className="text-red-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
