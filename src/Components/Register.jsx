import  { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/register",
        { name, email, password },
        { headers: { Accept: "application/json" } }
      );
      console.log("Registration Successful:", response.data);
      // Optionally, handle success here (e.g., redirect to login page)
    } catch (error) {
      console.error("Registration Failed:", error.response?.data);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 mb-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
        onClick={handleRegister}
        className="bg-blue-500 text-white p-2 w-full"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
