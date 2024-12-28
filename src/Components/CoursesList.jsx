import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const CoursesList = ({token }) => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get('https://react-interview.crd4lc.easypanel.host/api/course', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourse(response.data);
      } catch (error) {
        console.log('Error fetching courses:', error);
      }
    };
    if (token) fetchCourse();
  }, [token]);

  return (
    <div className="courses-list">
      <h2>Courses</h2>
      <div className="course-cards">
        {course.map((courses, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{courses.title}</Card.Title>
              <Card.Text>{courses.description}</Card.Text>
              <Button variant="primary">Enroll</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
