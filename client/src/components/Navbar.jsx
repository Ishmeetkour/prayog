import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import AppContext from '../context/context';
export default function Index() {

    const states = useContext(AppContext);
    const { darkTheme, toggleTheme, logged, toggleLogged } = states;

    return (
        <>
            <Navbar bg={darkTheme ? 'dark' : 'body-secondary'} data-bs-theme={darkTheme ? 'dark' : 'light'} expand="lg" className="d-flex justify-content-between px-2 px-md-5">

                <Navbar.Brand className='d-flex'>
                    {darkTheme
                        ? <img
                            alt=""
                            src="/logos/logo-dark.png"
                            width="90"
                            height="50"
                            className="m-0 me-2"
                        />
                        : <img
                            alt=""
                            src="/logos/logo-light.png"
                            width="90"
                            height="50"
                            className="m-0 me-2"
                        />}
                    <h3 className='d-none pt-2 d-md-inline-block'>Prayog</h3>
                </Navbar.Brand>
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
                    {
                        logged
                            ? <>
                                <Button onClick={toggleLogged} className='btn-danger d-none d-md-block'>Logout <i className="fa-solid fa-right-from-bracket"></i></Button>
                                <Button onClick={toggleLogged} className='btn-danger d-md-none'><i className="fa-solid fa-right-from-bracket"></i></Button>
                            </>
                            : <>
                                <Button as={Link} to='auth/login' className='d-none d-md-block'>Login <i className="fa-solid fa-right-to-bracket"></i></Button>
                                <Button as={Link} to='auth/login' className='d-md-none'><i className="fa-solid fa-right-to-bracket"></i></Button>
                            </>
                    }

                </div>

            </Navbar>
            <Navbar bg={darkTheme ? 'dark' : ''} data-bs-theme={darkTheme ? 'dark' : ''} expand="lg" className="p-0 bg-body-tertiary mt-0 sticky-top">
                <Container>
                    <Nav.Link as={Link} className={`ps-3 d-md-none text-${darkTheme ? 'light' : 'dark'}`} to='/'>Prayog</Nav.Link>
                    <Navbar.Toggle className='border-0' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-auto ps-3 ps-lg-0">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='projects'>Projects</Nav.Link>
                            <Nav.Link as={Link} to='workshops'>Workshops</Nav.Link>
                            {/* {
                                logged && <Nav.Link as={Link} to='profile'>Profile</Nav.Link>
                            } */}
                            {
                                logged && <Nav.Link as={Link} to='community'>Community</Nav.Link>
                            }

                            <Nav.Link as={Link} to='about'>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
