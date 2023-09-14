import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useContext} from 'react';
import AppContext from '../context/context';
export default function Index() {

    const states = useContext(AppContext);
    const {darkTheme,toggleTheme} = states;
    
    return (
        <>
            <header className={`px-4 py-1 d-flex flex-row justify-content-between bg-${darkTheme?'dark':'body-secondary'}`}>

                <div className='d-flex flex-row justify-content-center align-items-center gap-2 my-0'>
                    <img
                        alt="Logo"
                        src="/images/no-bg-logo.png"
                        width="80"
                        height="50"
                        className="m-0"
                    />
                    <Nav.Link as={Link} className={`fs-4 d-none d-md-block text-${darkTheme?'light':'dark'}`} to='/'>Prayog</Nav.Link>
                </div>
                <div className='d-flex flex-row gap-2 align-items-center'>
                    <a
                        onClick={() => toggleTheme(!darkTheme)}
                        className={`btn btn-lg border-0`}
                    >
                        {
                            darkTheme
                                ? <i className="fa-regular fa-lightbulb text-light"></i>
                                : <i className="fa-solid fa-lightbulb"></i>
                        }

                    </a>
                    <Button as={Link} to='auth/login' className='d-none d-md-block'>Login <i className="fa-solid fa-arrow-right-from-bracket"></i></Button>
                    <Button as={Link} to='auth/login' className='d-md-none'><i className="fa-solid fa-arrow-right-from-bracket"></i></Button>
                </div>

            </header>
            <Navbar  bg={darkTheme?'dark':''} data-bs-theme={darkTheme?'dark':''} expand="lg" className="p-0 bg-body-tertiary sticky-top">
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
