import { useContext } from 'react';
import AppContext from '../../context/context';
export default function About() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={`pt-4 ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <div className='container'>
        <section >
          <h2 className='text-center'>Welcome to Prayog!</h2>
          <p className='text-center m-0 fs-5'>
            {`We are an initiative dedicated to creating a unified platform for students from all walks of life. Our mission is to provide a space where students can effortlessly showcase their projects and ideas to a global audience. Whether you're working on a groundbreaking scientific experiment, a creative arts project, or an innovative technological solution, Prayog is here to help you share your work with the world.
    
            At Prayog, we believe in the power of knowledge sharing and collaboration. We want to foster an environment where students can connect, learn from one another, and inspire new ideas. By offering a seamless and user-friendly platform for uploading and sharing projects, we aim to break down barriers and make education and innovation accessible to all.
    
            Join us in our journey to empower students to reach their full potential and contribute to a brighter future through the exchange of knowledge and creativity. Explore the diverse projects and ideas from students around the globe, and be a part of this exciting educational community. Together, we can make a difference through Prayog!`}
          </p>
        </section>
        <section className='mt-4'>
          <h3 className='text-center'>What We Do?</h3>
          <div className="row g-0">
            <div className=" col-md-4 p-3">
              <div className='text-black rounded-4 shadow d-flex flex-column justify-content-center align-items-center text-center p-2' style={{ backgroundColor: 'orange', height: '200px' }} >
                <h4>Project Showcase</h4>
                <p>Prayog offers a platform for students to display their projects, fostering recognition and inspiration.</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className='text-black rounded-4 shadow d-flex flex-column justify-content-center align-items-center text-center p-2' style={{ backgroundColor: 'greenyellow', height: '200px' }} >
                <h4>Knowledge Exchange Hub</h4>
                <p>We connect students from diverse backgrounds, enabling them to learn, share, and engage in meaningful discussions.</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className='text-black rounded-4 shadow d-flex flex-column justify-content-center align-items-center text-center p-2' style={{ backgroundColor: 'cyan', height: '200px' }} >
                <h4>Educational Empowerment</h4>
                <p>Prayog breaks down barriers, ensuring all students have access to resources and opportunities for personal growth and learning.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className='text-center'>Our Team</h3>
          <div className="row">
            <div className="col-md-2 p-2 ">
              <div className='shadow d-flex text-black fw-medium  flex-column justify-content-center align-items-center rounded-5' style={{backgroundColor:'blueviolet',height:'200px'}}>
                <p className='fs-5 m-0'>Divanshu Naugai</p>
                <a className='text-decoration-none text-warning ' href="">Connect <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="col-md-2 p-2 d-flex flex-column">
              <div className='shadow d-flex text-black fw-medium  flex-column justify-content-center align-items-center rounded-5' style={{backgroundColor:'blueviolet',height:'200px'}}>
                <p className='fs-5 m-0'>Aditya Papnai</p>
                <a className='text-warning text-decoration-none' href="">Connect <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="col-md-2 p-2 d-flex flex-column">
              <div className='text-black fw-medium shadow d-flex text-black fw-medium  flex-column justify-content-center align-items-center rounded-5' style={{backgroundColor:'blueviolet',height:'200px'}}>
                <p className='fs-5 m-0'>Bhumika Pandey</p>
                <a className='text-decoration-none text-warning ' href="">Connect <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="col-md-2 p-2 d-flex flex-column">
              <div className='shadow d-flex text-black fw-medium  flex-column justify-content-center align-items-center rounded-5' style={{backgroundColor:'blueviolet',height:'200px'}}>
                <p className='fs-5 m-0'>Vaibhav Ghildiyal</p>
                <a className='text-decoration-none text-warning ' href="">Connect <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="col-md-2 p-2 d-flex flex-column">
              <div className='shadow d-flex text-black fw-medium  flex-column justify-content-center align-items-center rounded-5' style={{backgroundColor:'blueviolet',height:'200px'}}>
                <p className='fs-5 m-0'>Bhaskar Bhatt</p>
                <a className='text-decoration-none text-warning ' href="">Connect <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="col-md-2 p-2 d-flex flex-column">
              <div className='shadow d-flex text-black fw-medium  flex-column justify-content-center align-items-center rounded-5' style={{backgroundColor:'blueviolet',height:'200px'}}>
                <p className='fs-5 m-0'>Prerna Tewari</p>
                <a className='text-decoration-none text-warning ' href="">Connect <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
        </section>
        <section className='py-4'>
          <h2 className='text-center m-0'>Be a part of our journey</h2>
          <h4 className='text-center m-0'>Any Suggestions? <a className='text-decoration-none' href="">Mail Us</a></h4>
        </section>
      </div>
    </main>
  )
}
