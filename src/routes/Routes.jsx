import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import NeedVolunteer from "../components/NeedVolunteer/NeedVolunteer";
import AddVolunteer from "../components/AddVolunteer/AddVolunteer";
import ManagePost from "../components/ManagePost/ManagePost";
import VolunteerRtd from "../components/VolunteerRtd/VolunteerRtd";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import VolenteerSectonDetails from "../pages/VolenteerSectionDetails/VolenteerSectonDetails";
import UpdateVolunteer from "../pages/UpdateVolunteer/UpdateVolunteer";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-11-server-side-gamma-steel.vercel.app/volunteer')
            },
            {
                path: '/needVolunteer',
                element: <PrivateRoute><NeedVolunteer></NeedVolunteer></PrivateRoute>,
                loader: () => fetch('https://assignment-11-server-side-gamma-steel.vercel.app/volunteer')
            },
            {
                path: '/addVolunteer',
                element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
            },
            {
                path: '/managePost',
                element: <PrivateRoute><ManagePost></ManagePost></PrivateRoute>,
                loader: () => fetch('https://assignment-11-server-side-gamma-steel.vercel.app/volunteer')
            },
            {
                path: '/volunteerRqst',
                element: <VolunteerRtd></VolunteerRtd>,
                loader: () => fetch('https://assignment-11-server-side-gamma-steel.vercel.app/request')
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
                path: '/volunteerSDetls/:_id',
                element: <PrivateRoute><VolenteerSectonDetails></VolenteerSectonDetails></PrivateRoute>,
            },
            {
                path: '/updateVolunteer/:id',
                element: <PrivateRoute><UpdateVolunteer></UpdateVolunteer></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-11-server-side-gamma-steel.vercel.app/volunteer/${params.id}`)
            }
        ]
    }
]);


export default router;