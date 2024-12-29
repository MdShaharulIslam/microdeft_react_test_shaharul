import { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [badgeText, setBadgeText] = useState("");
  const [badgeColor, setBadgeColor] = useState("#ff0000");
  const [instructorName, setInstructorName] = useState("");

  const handleAddCourse = async (e) => {
    e.preventDefault(); 

    try {
      const token = localStorage.getItem("authToken");

      const courseData = {
        title,
        description,
        badge_text: badgeText,
        badge_color: badgeColor,
        instructor_name: instructorName,
      };

      // Send data to the API
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        courseData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token for authorization
            Accept: "application/json",
          },
        }
      );

      console.log("Course Added Successfully:", response.data);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="max-w-screen-sm mx-auto my-10 p-5 border rounded shadow">
      <h2 className="text-center text-2xl font-bold">Add New Course</h2>
      <form onSubmit={handleAddCourse}>
        <div className="mt-5">
          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter course title"
            required
          />
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter course description"
            required
          />
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-medium">Badge Text</label>
          <input
            type="text"
            value={badgeText}
            onChange={(e) => setBadgeText(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter badge text (e.g. Featured)"
            required
          />
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-medium">Badge Color</label>
          <input
            type="color"
            value={badgeColor}
            onChange={(e) => setBadgeColor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-medium">Instructor Name</label>
          <input
            type="text"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter instructor's name"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 mt-5 rounded hover:bg-blue-700"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
