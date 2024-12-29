import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";


import Services from "../Component/Pages/Services/CourseCards";


import SignUp from './../Component/Pages/SignUp/SignUp';
import Login from './../Component/Pages/Login/Login';

import AddServices from "../Component/Pages/Services/AddServices";



export const router = createBrowserRouter([
  {
    path: "/", 
    element: <Main></Main>, 
    children: [
          
      {
        path: "/services",
        element: <Services></Services>,
      },
    
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      
      {
        path: '/AddServices',
        element: <AddServices></AddServices>
      },
      
    

    ],
  },
]);
