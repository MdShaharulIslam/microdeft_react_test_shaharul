import { useState } from "react";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginAndFetchCourses = async () => {
    setLoading(true);
    try {
      
      const loginResponse = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        {
          email: "naim.microdeft@gmail.com",
          password: "12345678"
        },
        {
          headers: {
            Accept: "Application/json"
          }
        }
      );

      const token = loginResponse.data.token; 
      const courseResponse = await axios.get(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          headers: {
            Accept: "Application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );
      setCourses(courseResponse.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load data: " + err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={loginAndFetchCourses}>Login and Fetch Courses</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {courses.length > 0 && (
        <div>
          {courses.map(course => (
            <div key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
