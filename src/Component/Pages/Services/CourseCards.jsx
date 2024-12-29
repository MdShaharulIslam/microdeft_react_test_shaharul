import { useEffect, useState } from "react";
import "./Card.css";

const CourseCards = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjEyMzkwMjIyfQ.8aW9dszK81C3-XZmflkcXGnI1bcJf22bQZv_E1jTxiU";
  const backendURL = "https://react-interview.crd4lc.easypanel.host/api/course";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(backendURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          console.error("API Error:", errorMessage);
          throw new Error(
            `Failed to fetch courses: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        setCourses(data);
      } catch (err) {
        console.error("Error Fetching Data:", err.message);
        setError(err.message);

       
        setCourses([
          {
            id: 1,
            title: "React professional course",
            description: "This course is only for professionals who has react expertise",
            badge_text: "Featured",
            image: "hhttps://i.ibb.co.com/p1F6nT3/images.jpg",
            badge_color: "red",
            instructor_name: "Naim"
          },
          {
            id: 2,
            title: "Mock Course 2",
            description: "This is a description for Mock Course 2.",
            badge_text: "Featured",
            image: "https://i.ibb.co.com/p1F6nT3/images.jpg",
            badge_color: "#33FF57",
            instructor_name: "Jane Smith",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    console.warn("Showing fallback data due to error:", error);
  }

  return (
    <div className="course-container">
      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          
          <div
            className="badge"
            style={{ backgroundColor: course.badge_color }}
          >
            {course.badge_text}
          </div><img src={course.image} alt="" />
          <h2 className="course-title">{course.title}</h2>
          <p className="course-description">{course.description}</p>
          <p className="course-instructor">
            Instructor: {course.instructor_name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
