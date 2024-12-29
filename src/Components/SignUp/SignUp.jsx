import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import singInImg from "../../assets/signin.jpg";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();

    // Input Validation
    if (password.length < 6) {
      return toast.error("Password should be at least 6 characters");
    }

    // API Request
    try {
      const handleCreateUser = async (e) => {
        e.preventDefault();
      
        if (password.length < 6) {
          return toast.error("Password should be at least 6 characters");
        }
      
        try {
          const response = await fetch(
            "https://react-interview.crd4lc.easypanel.host/api/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                password,
              }),
            }
          );
      
          // Log response status and content for debugging
          console.log("Response Status:", response.status);
          const textResponse = await response.text();
          console.log("Raw Response:", textResponse);
      
          if (!response.ok) {
            throw new Error(`Server Error: ${textResponse}`);
          }
      
          const result = JSON.parse(textResponse); // Parse if it's valid JSON
          toast.success("Registration successful!");
          navigate("/"); // Redirect after success
        } catch (error) {
          console.error("Error:", error);
          toast.error("Registration failed. Please try again.");
        }
      };
      

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const result = await response.json();
      console.log(result);
      toast.success("Registration successful!");
      navigate("/"); // Redirect to homepage or login page
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-7 lg:my-10 bg-gray-100 rounded-2xl">
      <div className="w-full text-black flex gap-5 justify-between items-center py-10">
        <div className="w-2/3 hidden lg:flex gap-10 justify-center items-center">
          <img src={singInImg} alt="" className="h-[650px] rounded-xl" />
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-white max-w-md mx-auto py-5 p-8 rounded-xl">
            <form onSubmit={handleCreateUser}>
              <h3 className="text-xl md:text-2xl font-semibold mb-5 text-center">
                Welcome! Sign Up Here
              </h3>
              <div className="my-1">
                <label htmlFor="name" className="block py-2 ml-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border-2 rounded"
                  placeholder="Your Name Here"
                  required
                />
              </div>
              <div className="my-1">
                <label htmlFor="email" className="block py-2 ml-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border-2 rounded"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="password"
                  className="block py-1 ml-1 font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border-2 rounded"
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#008FD4] hover:bg-[#0870A1] text-white rounded mt-3 mb-5 duration-300"
              >
                Sign Up
              </button>
            </form>
            <div className="divider">Or</div>
            <p className="text-gray-600 font-medium text-center my-4">
              Do not have an account{" "}
              <Link
                to={"/signIn"}
                className="font-bold text-[#008FD4] hover:text-[#0870A1]"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
