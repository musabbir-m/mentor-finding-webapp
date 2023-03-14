import Main from "../../Layouts/Main";
import BecomeMentor from "../BecomeMentor/BecomeMentor";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";

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
        path:'/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/becomementor',
        element: <BecomeMentor></BecomeMentor>
      }
    ],
  },
]);

export default router;
