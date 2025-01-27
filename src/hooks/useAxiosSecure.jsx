import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "car-doctor-server-ten-mauve.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        // the expiresIn option when generating token needs to be set to like.. 1/2/3 seconds to catch this error
        console.log("error tracked in the interceptor: ", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              console.log("User signed out successfully!");
              navigate("/login");
            })
            .catch((err) => {
              console.log("Failed to sign out user:", err);
            });
        }
      }
    );
  }, [navigate, logOut]);

  return axiosSecure;
};

export default useAxiosSecure;
