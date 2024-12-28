import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";

import SingIn from "../SignIn/SingIn";
import SignUp from "../SignUp/SignUp";
import AddCourse from "../Pages/AddCours";



const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
     
      {
        path: "signIn",
        element: <SingIn></SingIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "add-course",
        element: <AddCourse></AddCourse>,
      }
  
    ],
  },
]);

export default MainRouter;
