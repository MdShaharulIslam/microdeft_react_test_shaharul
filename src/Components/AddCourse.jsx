import { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  // State variables for the course form
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [instructorName, setInstructorName] = useState("Naim");
  const [badgeColor, setBadgeColor] = useState("#ff0000"); // Default red color
  const [badgeText, setBadgeText] = useState("Featured");

  // Handle form submission
  const handleAddCourse = async () => {
    // Get token from localStorage
    const token = localStorage.getItem("authToken");

    // Check if token exists; if not, stop the API call
    if (!token) {
      console.error("You need to login first.");
      return;
    }

    // Course data to send to the API
    const courseData = {
      title: courseTitle,
      description: courseDescription,
      badge_text: badgeText,
      badge_color: badgeColor,
      instructor_name: instructorName,
    };

    try {
      // POST request to the API to add the course
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        courseData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`, // Authorization token passed in the header
          },
        }
      );
      console.log("Course Added Successfully:", response.data);

      // Optionally reset form after successful submission
      setCourseTitle("");
      setCourseDescription("");
    } catch (error) {
      // Improved error handling with detailed messages
      if (error.response) {
        console.error("Failed to Add Course:", error.response.data);
        console.error("Error Status Code:", error.response.status);
      } else if (error.request) {
        console.error("No response received from the server:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Add Course</h2>

      {/* Course Title Input */}
      <input
        type="text"
        placeholder="Course Title"
        className="border p-2 mb-2 w-full"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />

      {/* Course Description Input */}
      <textarea
        placeholder="Course Description"
        className="border p-2 mb-2 w-full"
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
      />

      {/* Instructor Name Input */}
      <input
        type="text"
        placeholder="Instructor Name"
        className="border p-2 mb-2 w-full"
        value={instructorName}
        onChange={(e) => setInstructorName(e.target.value)}
      />

      {/* Badge Text Input */}
      <input
        type="text"
        placeholder="Badge Text"
        className="border p-2 mb-2 w-full"
        value={badgeText}
        onChange={(e) => setBadgeText(e.target.value)}
      />

      {/* Badge Color Picker */}
      <input
        type="color"
        className="border p-2 mb-2 w-full"
        value={badgeColor}
        onChange={(e) => setBadgeColor(e.target.value)}
      />

      {/* Submit Button */}
      <button
        onClick={handleAddCourse}
        className="bg-orange-500 text-white p-2 w-full"
      >
        Add Course
      </button>
    </div>
  );
};

export default AddCourse;
