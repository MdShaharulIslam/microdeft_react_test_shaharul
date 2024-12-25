import  { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/register', {
        name,
        email,
        password,
      });
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Error during registration');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleRegister}>
          Register
        </Button>
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
