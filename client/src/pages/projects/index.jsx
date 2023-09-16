import { useContext } from 'react';
import AppContext from '../../context/context';

export default function Projects() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <body className={`bg ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <div className='container pt-3'>
        <div className='row'>
          <div className='col-md-6'><h1 >Projects</h1></div>
          <div className={` mt-1 mt-md-0 col-md-6 d-flex align-items-center justify-content-md-end justify-content-between `}>
            <form  role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <button className={`btn border-0 ${darkTheme?'text-light':'text-black'}`}>Filters <i className="fa-solid fa-filter"></i></button>
          </div>
        </div>
        <hr className='mt-1' />
        <div className='list-group'>
          {Array.from({ length: 10 }, (_, i) => (
            <section
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