import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Initialize the navigate function

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        { email, password },
        { headers: { Accept: "application/json" } }
      );
      console.log("Login Successful:", response.data);
      const token = response.data.token;

      // Set token in state
      setToken(token);

      // Store token in local storage
      localStorage.setItem("authToken", token);

      // Redirect to the add-course page after successful login
      navigate("/add-course");  // Redirects to /add-course

    } catch (error) {
      // Improved error handling
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
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-2 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-green-500 text-white p-2 w-full"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
