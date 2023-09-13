import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function index() {
    return (
        <>
            <header className={`px-4 py-1 d-flex flex-row justify-content-between bg-body-secondary`}>

                <div className='d-flex flex-row justify-content-center align-items-center gap-2 my-0'>
                    <img
                        alt="Logo"
                        src="/no-bg-logo.png"
                        width="80"
                        height="50"
                        className="m-0"
                    />
                    <Nav.Link as={Link} className='fs-4 d-none d-md-block' to='/'>Prayog</Nav.Link>
                </div>
                <div className='d-flex flex-row gap-2 align-items-center'>
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Dark Mode"
                        checked={false}
                    />
                    <Button as={Link} to='login' className=''>Login <i className="fa-solid fa-arrow-right-from-bracket"></i></Button>
                </div>

            </header>
            <Navbar expand="lg" className="p-0 bg-body-tertiary sticky-top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='academics'>Option 1</Nav.Link>
                            <Nav.Link as={Link} to='academics'>Option 2</Nav.Link>
                            <Nav.Link as={Link} to='academics'>Option 3</Nav.Link>
                            <Nav.Link as={Link} to='academics'>Option 4</Nav.Link>
                            <Nav.Link as={Link} to='about'>About</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
