import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../../../context/context';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
export default function Index() {
  const states = useContext(AppContext);
  const { darkTheme } = states;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [degree, setDegree] = useState('B Tech'); // Default degree

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the registration logic
    // For this example, we'll just display the submitted data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date of Birth:', dob);
    console.log('College Name:', collegeName);
    console.log('Degree:', degree);
  };
  return (
    <main className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <Row className='g-0'>
        <Col className={`p-2 p-md-5 d-flex flex-column align-items-center d-md-block `} md={6} >
          <h1>Registration</h1>
          <Form className='d-flex flex-column gap-2 w-75'  onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

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

            <Form.Group controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="collegeName">
              <Form.Label>College Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your college name"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="degree">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                as="select"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              >
                <option value="ug">Under Graduate</option>
                <option value="pg">Post Graduate</option>
                <option value="diploma">Diploma</option>
                <option value="certificate">Certificate</option>
              </Form.Control>
            </Form.Group>

            <Button className='my-2' variant="primary" type="submit">
              Register
            </Button>
            <p>Already have an account <Nav.Link className={`d-inline-block  ${darkTheme?'':'text-black'} fw-bold`} as={Link} to='/auth/login'>Login</Nav.Link></p>
          </Form>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
    </main>
  )
}
