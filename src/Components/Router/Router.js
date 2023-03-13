import Main from "../../Layouts/Main";
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
      }
    ],
  },
]);

export default router;
