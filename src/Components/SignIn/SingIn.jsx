// SignIn.js
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        { email, password },
        { headers: { Accept: "application/json" } }
      );
      console.log("Login Successful:", response.data);


      const token = response.data.token;
      localStorage.setItem("authToken", token);

   
      navigate("/add-course");
    } catch (error) {
      if (error.response) {
        console.log("Login Failed:", error.response.data);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error setting up request:", error.message);
      }
    }
  };

  return (
    <div className="max-w-screen-sm mx-auto my-10 p-5 border rounded shadow">
      <h2 className="text-center text-2xl font-bold">Sign In</h2>
      <div className="mt-5">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your email"
        />
      </div>
      <div className="mt-5">
        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your password"
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 mt-5 rounded hover:bg-blue-700"
      >
        Sign In
      </button>
      <p className="text-gray-600 font-medium text-center my-4">
        Do not have an account?{" "}
        <Link
          to={"/signUp"}
          className="font-bold text-[#008FD4] hover:text-[#0870A1]"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
