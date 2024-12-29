import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFound from "../Pages/NotFound";


import SingIn from "../SignIn/SingIn";
import SignUp from "../SignUp/SignUp";
import AddCourse from "../Pages/AddCours";
import CourseList from "../Pages/CourseList/CourseList";



const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
     
     
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
      },
      {
         path: "courseList",
        element: <CourseList></CourseList>,
      }
  
    ],
  },
]);

export default MainRouter;
