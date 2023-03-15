import Main from "../../Layouts/Main";
import BecomeMentor from "../BecomeMentor/BecomeMentor";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import WebDevelopment from "../Category/WebDevelopment";
import UxDesign from "../Category/UxDesign";
import Programming from "../Category/Programming";
import ProductMarketing from "../Category/ProductMarketing";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main> </Main>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/becomementor",
        element: <BecomeMentor></BecomeMentor>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/webdevelopment",
        element: <WebDevelopment></WebDevelopment>
      },
      {
        path: "/category/uxdesign",
        element: <UxDesign></UxDesign>
      },
     
      {
        path: '/category/product&marketing',
        element:<ProductMarketing></ProductMarketing>
      },
      {
        path: "/category/programming",
        element: <Programming></Programming>
      }

    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
