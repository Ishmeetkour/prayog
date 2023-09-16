import { useContext, useState } from 'react';
import AppContext from '../../context/context';
import Collapse from 'react-bootstrap/Collapse';
export default function Workshops() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  const [open, setOpen] = useState(false);
  return (
    <body className={`${darkTheme ? 'bg-dark text-light' : ''}`}>
      <div className='container pt-3 '>
        <div className='row'>
          <div className='col-md-6'><h1 >Workshops</h1></div>
          <div className={` mt-1 mt-md-0 col-md-6 d-flex align-items-center justify-content-md-end justify-content-between `}>
            <input className="form-control w-75" type="text" placeholder="Search" />
            <button
              onClick={() => setOpen(!open)}
              className={`btn border-0 ${darkTheme ? 'text-light' : 'text-black'}`}
            >Filters <i className="fa-solid fa-filter"></i>
            </button>
          </div>
        </div>
        <hr className='mt-1 mb-2' />
        <Collapse in={open}>
          <div className='row g-0'>
            <div className="col-md-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Electronics
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Mechanical
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Electronics
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Mechanical
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <label className='form-label' htmlFor="sort">Sort By</label>
              <select id='sort' className="form-select ">
                <option >Newsest First</option>
                <option value={1}>Oldest First</option>
                <option value={2}>Most Visited</option>
              </select>
            </div>
          </div>
        </Collapse>
        <div className='pt-2 list-group'>
          {Array.from({ length: 10 }, (_, i) => (
            <section
              key={i}
              className={`list-group-item  ${darkTheme ? 'list-group-item-dark' : 'list-group-item-light'
                } p-3 rounded-0 card`}
              data-bs-theme={darkTheme ? 'dark' : ''}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/images/workshop.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-4">Tech Seminar on High Reliability PV Backsheet</h5>
                    <p className="card-text">
                      {`Join us for an enlightening tech seminar presented by Jollywood on the subject of "High Reliability PV Backsheet." In this engaging session, we will delve into the intricacies of photovoltaic backsheet materials, exploring their crucial role in ensuring the durability and longevity of solar panels. Jollywood, a renowned authority in the field, will share invaluable insights, cutting-edge advancements, and best practices for selecting and maintaining high-reliability backsheets. Whether you are an industry professional, researcher, or simply curious about solar technology, this seminar promises to expand your knowledge and enhance your understanding of the critical components that power our sustainable future. Don't miss out!`}
                    </p>
                    <p className="card-text"><small>Mechanical</small></p>
                    <p className="card-text"><small>17-09-2019</small></p>
                    <p className="card-text"><small>{22} Views</small></p>
                    <a className="card-text text-decoration-none" href='https://wikipedia.com' target='_blank' rel="noreferrer">
                      <small>Visit <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></small>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </body>
  )
}
