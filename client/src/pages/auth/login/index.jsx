import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import { useContext, useState } from 'react';
import AppContext from '../../../context/context';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
export default function Login() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your authentication logic
    // For this example, we'll just display the submitted data
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <main className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <Row className='g-0'>
        <Col md={6}  className={`p-2 p-md-5 d-flex flex-column align-items-center d-md-block `}>
          <h1 className=''>Login</h1>
          <Form className='d-flex flex-column gap-2 w-75' onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button  className='my-2' variant="primary" type="submit">
              Login
            </Button>
            <p className='text-center text-md-start'>New to Prayog? <Nav.Link className={`d-inline-block  ${darkTheme?'':'text-black'} fw-bold`} as={Link} to='/auth/register'>Create Account</Nav.Link></p>
          </Form>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
    </main>
  )
}


