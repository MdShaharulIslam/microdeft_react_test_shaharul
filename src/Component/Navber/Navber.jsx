import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import useAuth from "./../Hooks/useAuth";
import Swal from "sweetalert2";


const Navber = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // For user dropdown
  const { user, logOut } = useAuth(); // Assume `logout` is provided by useAuth
  const navigate = useNavigate(); // Used for navigation after logout

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Successfully",
        text: "Your Account has been Log Out!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/");
    });
  };

  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
       
          <div className="flex items-center justify-between">
            
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

        
          <div
            className={`flex-col md:flex md:flex-row md:items-center absolute md:relative bg-white dark:bg-gray-800 left-0 w-full md:w-auto px-6 md:px-0 transition-transform duration-300 ease-in-out ${isOpen ? "flex opacity-100" : "hidden"
              } md:flex`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/AddServices"
                className="my-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0 transition-colors duration-300"
              >
                AddCourse
              </Link>
              <Link
                to="/services"
                className="my-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0 transition-colors duration-300"
              >
                CoursesList
              </Link>
            
            </div>
            <div className="relative">
              {user ? (
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-300"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  />
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-48">
                      {/* User Display */}
                      <div className="p-4 text-sm text-gray-700">
                        {user.displayName || "User"}
                      </div>

                      {/* Logout Button */}
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                      <button
                        // onClick={handleExit}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full px-4 py-2 text-left text-blue-500 hover:bg-gray-100"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="text"
                      size="sm"
                      className=" lg:inline-block text-white"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Join Us</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;


