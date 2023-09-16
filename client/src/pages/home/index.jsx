import { useContext } from "react"
import AppContext from "../../context/context"
import Translate from '../../components/Translate'
import Scale from '../../components/Scale'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
export default function Index() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <body className={` ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <main>
        <Row className="g-0 overflow-hidden">
          <Col className="d-flex justify-content-center" lg={6}>
            <section className="py-3 text-center text-md-start">
              <div className="head-quote text-center p-5 shadow">
                <Scale fromScale={0.5} toScale={1}><h1 className="display-3 mb-0">सर्वस्य लोचनं शास्त्रं</h1></Scale>
                <p className="mt-1 fs-5">Science is the only eye</p>
              </div>
              <div className="py-5 ps-2 h-75 text-center text-lg-start">
                <div>
                  <h3 className="my-1 me-1 d-inline-block">{`Want to know about us? `}</h3>
                  <Nav.Link className="d-inline-block" as={Link} to='/about'><h4>Click Here <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i></h4></Nav.Link>
                </div>
                <hr />
                <div>
                  <h3 className="my-1 me-1 d-inline-block">{`Searching for a Project? `}</h3>
                  <Nav.Link className="d-inline-block" as={Link} to='/projects'><h4>Click Here <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i></h4></Nav.Link>
                </div>
                <hr />
                <div>
                  <h3 className="my-1 me-1 d-inline-block">{`Searching for a Mini Project? `}</h3>
                  <Nav.Link className="d-inline-block" as={Link} to='/mini-projects'><h4>Click Here <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i></h4></Nav.Link>
                </div>
                <hr />
                <div>
                  <h3 className="my-1 me-1 d-inline-block">{`Finding a Workshop?`}</h3>
                  <Nav.Link className="d-inline-block" as={Link} to='/workshops'><h4>Click Here <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i></h4></Nav.Link>
                </div>
                <hr />
              </div>
            </section>

          </Col>
          <Col className="mt-2 " lg={6}>
            <Translate fromX={300} >
              <section className="pt-3 d-none d-md-flex flex-column justify-content-center">
                <h1 className="text-center text-lg-start">Prayog</h1>
                <div className="p-1 w-100 fs-4 text-center text-lg-start">
                  <>
                    <strong>Student Project Database</strong>
                    <p>Prayog is a platform where university students can submit their academic projects, creating a central database for easy access.</p>
                  </>
                  <>
                    <strong>Open Access Inspiration</strong>
                    <p>Prayog offers open access to these projects, inspiring students, educators, and professionals alike.</p>
                  </>
                  <>
                    <strong>Efficient Search and Filters</strong>
                    <p>Prayog provides robust search and filter options for precise project discovery.</p>
                  </>
                  <>
                    <strong>Community Interaction</strong>
                    <p>Prayog encourages engagement through comments, ratings, and forums, fostering a supportive academic community.</p>
                  </>
                </div>
              </section>
            </Translate>
            <section className="d-md-none">
              <h1 className="text-center">Prayog</h1>
              <div className="p-1 fs-4 text-center">
                <>
                  <strong>Student Project Database</strong>
                  <p>Prayog is a platform where university students can submit their academic projects, creating a central database for easy access.</p>
                </>
                <>
                  <strong>Open Access Inspiration</strong>
                  <p>Prayog offers open access to these projects, inspiring students, educators, and professionals alike.</p>
                </>
                <>
                  <strong>Efficient Search and Filters</strong>
                  <p>Prayog provides robust search and filter options for precise project discovery.</p>
                </>
                <>
                  <strong>Community Interaction</strong>
                  <p>Prayog encourages engagement through comments, ratings, and forums, fostering a supportive academic community.</p>
                </>
              </div>
            </section>
          </Col>
        </Row>
      </main>
      <br />
      <div className="container overflow-hidden">
        <section>
          <Row className="g-0">
            <Col md={6}>
              <Translate fromX={100}>
                <img className="w-100" src="/images/languages.png" alt="" />
                <ul className="fs-5">
                  <li>Discover, upload, and share your programming projects with fellow students.</li>
                  <li>Showcase your coding prowess - share your projects, inspire others.</li>
                  <li>Explore a world of programming languages, download and learn from your peers.</li>
                  <li>Empower your coding journey - contribute and download innovative projects.</li>
                </ul>
                <hr />
              </Translate>
            </Col>
          </Row>
          <Row className="g-0">
            <Col md={6}></Col>
            <Col md={6}>
              <Translate fromX={-100}>
                <img className="w-100" src="/images/mechanical.png" alt="" />
                <ul className="fs-5">
                  <li>Explore a world of mechanical engineering projects created by your peers.</li>
                  <li>Showcase your mechanical design and innovation - share your projects for inspiration.</li>
                  <li>Discover solutions to real-world challenges - download and learn from fellow students.</li>
                  <li>Collaborate and contribute to the world of mechanical engineering innovation.</li>
                </ul>
                <hr />
              </Translate>
            </Col>
          </Row>
          <Row className="g-0">

            <Col md={6}>
              <Translate fromX={100}>
                <img className="w-100" src="/images/electronics.png" alt="" />
                <ul className="fs-5">
                  <li>Explore a world of electronics projects created by your fellow students.</li>
                  <li>Showcase your electronic design and innovation - share your projects for inspiration.</li>
                  <li>Discover cutting-edge solutions - download and learn from the electronics community.</li>
                  <li>Collaborate and contribute to the world of electronic engineering innovation.</li>
                </ul>
                <hr />
              </Translate>
            </Col>
          </Row>
          <Row className="g-0">
            <Col md={6}></Col>
            <Col md={6}>
              <Translate fromX={-100}>
                <img className="w-100" src="/images/workshops.png" alt="" />
                <ul className="fs-5">
                  <li>Explore past seminars and workshops to access valuable insights and resources.</li>
                  <li>Stay updated on upcoming events to plan your participation and learning journey.</li>
                  <li>Connect with experts and peers in various fields through our {`college's`} events.</li>
                  <li>Enhance your knowledge and skills by attending both past and future seminars.</li>
                </ul>
                <hr />
              </Translate>
            </Col>
          </Row>
        </section>
      </div>
    </body>
  )
}
