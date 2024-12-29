import { useState } from "react";
import axios from "axios";

const AddServices = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    badge_text: "",
    badge_color: "",
    instructor_name: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle form input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  // Submit data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const backendURL = "https://react-interview.crd4lc.easypanel.host/api/course";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjEyMzkwMjIyfQ.8aW9dszK81C3-XZmflkcXGnI1bcJf22bQZv_E1jTxiU";

    try {
      const response = await axios.post(backendURL, course, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      alert("Course added successfully!");
      setCourse({
        title: "",
        description: "",
        badge_text: "",
        badge_color: "",
        instructor_name: "",
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error adding course:", error.response?.data || error.message);
      alert(
        `Failed to add course. ${
          error.response?.data?.message || "Please check your credentials and try again."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-6">Create a New Course</h1>

      {/* Course Information */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-1">Course Title</label>
        <input
          type="text"
          name="title"
          value={course.title}
          onChange={handleChange}
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <label className="block text-sm font-medium mt-4">Description</label>
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
        <label className="block text-sm font-medium mt-4">Badge Text</label>
        <input
          type="text"
          name="badge_text"
          value={course.badge_text}
          onChange={handleChange}
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <label className="block text-sm font-medium mt-4">Badge Color</label>
        <input
          type="color"
          name="badge_color"
          value={course.badge_color}
          onChange={handleChange}
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <label className="block text-sm font-medium mt-4">Instructor Name</label>
        <input
          type="text"
          name="instructor_name"
          value={course.instructor_name}
          onChange={handleChange}
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          onClick={() =>
            setCourse({
              title: "",
              description: "",
              badge_text: "",
              badge_color: "",
              instructor_name: "",
            })
          }
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 text-white rounded-md ${
            loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </div>
    </form>
  );
};

export default AddServices;
