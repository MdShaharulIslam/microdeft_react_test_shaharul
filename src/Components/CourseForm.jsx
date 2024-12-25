import  { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const CourseForm = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [badgeText, setBadgeText] = useState('');
  const [badgeColor, setBadgeColor] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [message, setMessage] = useState('');

  const handleAddCourse = async () => {
    try {
      const response = await axios.post(
        'https://react-interview.crd4lc.easypanel.host/api/course',
        {
          title,
          description,
          badge_text: badgeText,
          badge_color: badgeColor,
          instructor_name: instructorName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Course added successfully!');
    } catch (error) {
      setMessage('Error adding course');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Course</h2>
      <Form>
        <Form.Group controlId="formCourseTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCourseDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBadgeText">
          <Form.Label>Badge Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter badge text"
            value={badgeText}
            onChange={(e) => setBadgeText(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBadgeColor">
          <Form.Label>Badge Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter badge color"
            value={badgeColor}
            onChange={(e) => setBadgeColor(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formInstructorName">
          <Form.Label>Instructor Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter instructor name"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddCourse}>
          Add Course
        </Button>
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CourseForm;
