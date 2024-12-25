import  { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/login', {
        email,
        password,
      });
      setToken(response.data.token);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Error during login');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <Form>
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

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
