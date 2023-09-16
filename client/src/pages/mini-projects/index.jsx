import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AppContext from '../../context/context';
import Collapse from 'react-bootstrap/Collapse';
export default function MiniProjects() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <body className={` ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <div className='container pt-3'>
        <div className='row'>
          <div className='col-md-6'><h1 >Mini Projects</h1></div>
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
                <option value={2}>Most Viewed</option>
              </select>
            </div>
          </div>
        </Collapse>
        <div className='pt-2 list-group'>
          {Array.from({ length: 10 }, (_, i) => (
            <section
              onClick={() => navigate('/mini-projects/qazwsxedc')}
              key={i}
              className={`list-group-item list-group-item-action  ${darkTheme ? 'list-group-item-dark' : 'list-group-item-light'
                } p-3 rounded-0 card`}
              data-bs-theme={darkTheme ? 'dark' : ''}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/images/p1.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Self Directoning Rover</h5>
                    <p className="card-text">
                      Arduino-powered self-directing rover is an autonomous vehicle project. It uses Arduino microcontrollers,
                      sensors, and programming to navigate and adapt to its environment independently, offering an engaging and
                      educational experience in robotics.
                    </p>
                    <p className="card-text"><small>Electronics</small></p>
                    <p className="card-text"><small>22-3-2023</small></p>
                    <p className="card-text"><small>{22} Views</small></p>
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
