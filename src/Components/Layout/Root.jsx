import { Outlet, useLocation } from "react-router-dom";

import { useEffect } from "react";
import Navber from "../../Components/Navber";



const Root = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "College-Booking";
    } else {
      document.title = `College-Booking ${location.pathname.replace("/", " | ")}`;
    }
  }, [location]);

  return (
    <div>
   <Navber></Navber>
      <Outlet></Outlet>
     
    
    </div>
  );
};

export default Root;
