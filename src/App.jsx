import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/Components/Login";
import Register from "../src/Components/Register";
import AddCourse from "../src/Components/AddCourse";
import CoursesList from "./Components/CoursesList";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Frontend Online Test</h1>

        <Routes>
         
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/add-course" element={<AddCourse token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
