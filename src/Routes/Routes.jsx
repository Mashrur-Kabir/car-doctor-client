import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homepage/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/AddService/AddService";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut/></PrivateRoute>,
                // load the id-related service with needed information (set by options in backend)
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`) //this id should be the same name as the param name you used with route ('/checkout/:id')           }
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings/></PrivateRoute>
            }
        ],
    },
  ]);

  export default router;