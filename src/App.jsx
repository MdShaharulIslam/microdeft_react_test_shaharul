import { useState } from 'react';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import CourseForm from './Components/CourseForm';
import CoursesList from './Components/CoursesList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/add-course" element={<CourseForm token={token} />} />
          <Route path="/courses" element={<CoursesList token={token} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
