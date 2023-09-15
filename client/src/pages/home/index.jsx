import { useContext } from "react"
import AppContext from "../../context/context"
import Translate from '../../components/Translate'
import Scale from '../../components/Scale'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Index() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <Row className="g-0 overflow-hidden">
        <Col className="d-flex justify-content-center" lg={6}>
          <section className="py-3 text-center text-md-start">
            <div className="head-quote text-center p-5 shadow">
              <Scale fromScale={0.5} toScale={1}><h1 className="display-3 mb-0">सर्वस्य लोचनं शास्त्रं</h1></Scale>
              <p className="mt-1 fs-5">Science is the only eye</p>
            </div>
          </section>
        </Col>
        <Col className="mt-2 " lg={6}>
          <Translate fromX={300} >
            <section className="d-none d-md-flex flex-column justify-content-center">
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br />
      <br />
      <br />
    </main>

  )
}
