import { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/context';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
function Project() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Simulate loading project data based on the id from the URL
    fetchProjectData().then((data) => {
      setProjectData(data);
    });
  }, [id]);

  if (projectData === null) {
    // Display a loading indicator while data is being fetched
    return <Loading />;
  }

  // Render the project data once it's loaded
  return (
    <body className={`pt-2 ${darkTheme ? 'bg-dark text-light' : ''}`}>
      <div className='container '>
        <h1 className='text-center text-md-start'>Self Directoning Rover</h1>
        <hr />
        <div className='p-4 row g-0'>
          <div className='col-md-6 order-2 order-md-1'>

            <p className='m-0 fs-4 text-center text-md-start'>
              Arduino-powered self-directing rover is an autonomous vehicle project. It uses Arduino microcontrollers,
              sensors, and programming to navigate and adapt to its environment independently, offering an engaging and
              educational experience in robotics.
            </p>
          </div>
          <div className='col-md-6 order-1 order-md-2'>
            <img src="/images/p1.jpg" className="img-fluid" alt="..." />
          </div>
        </div>
        <hr />
        <section>
          <div className="row g-0">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <h3>Project Owner</h3>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <p>Divyanshu Naugai</p>
              <p>BTKIT Dwarahat</p>
              <a className='text-decoration-none' href="mailto:youremail@example.com">Contact <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <h3 className='text-center'>Gallery</h3>
          <div className='row g-0'>
            <div className='p-2 col-md-6'>
              <img src="/images/p1.jpg" className="img-fluid" alt="..." />
            </div>
            <div className='p-2 col-md-6'>
              <img src="/images/p1.jpg" className="img-fluid" alt="..." />
            </div>
          </div>
          <div className='row g-0'>
            <div className='p-2 col-md-6'>
              <img src="/images/p1.jpg" className="img-fluid" alt="..." />
            </div>
            <div className='p-2 col-md-6'>
              <img src="/images/p1.jpg" className="img-fluid" alt="..." />
            </div>
          </div>
          <div className='row g-0'>
            <div className='p-2 col-md-6'>
              <img src="/images/p1.jpg" className="img-fluid" alt="..." />
            </div>
            <div className='p-2 col-md-6'>
              <img src="/images/p1.jpg" className="img-fluid" alt="..." />
            </div>
          </div>
        </section>
        <hr />
        <section>
          <h3 className='text-center'>Synopsis</h3>
          <p className='m-0 fs-5 text-center text-md-start'>
            {`The Arduino-powered self-directing rover represents a fascinating leap into the world of autonomous vehicles, seamlessly blending cutting-edge technology with educational exploration. At its core, this project harnesses the power of Arduino microcontrollers, sensors, and ingenious programming to create a rover that possesses the remarkable ability to navigate and adapt to its surroundings autonomously.

            The heart of this rover is the Arduino microcontroller, serving as its brain. Equipped with a plethora of sensors such as ultrasonic, infrared, and cameras, it gathers data from its environment in real-time, allowing it to make informed decisions. This sensory input forms the basis for a complex algorithmic framework that guides the rover's movements, enabling it to detect obstacles, chart paths, and even respond to dynamic changes in its environment.

            What sets this project apart is its immersive educational value. Aspiring roboticists and enthusiasts can delve into the intricate world of robotics, honing their skills in coding, electronics, and problem-solving. By designing, building, and programming this rover, individuals gain hands-on experience in artificial intelligence, machine learning, and automation, setting the stage for future innovations in this field.

            Ultimately, the Arduino-powered self-directing rover is more than just a technical marvel; it's a vehicle of discovery, offering a captivating journey through the captivating realm of robotics and inspiring the next generation of engineers and innovators.`}
          </p>
        </section>
        <hr />
        <section>
          <h3 className='text-center'>References</h3>
          <div className='row g-0'>
            <div className='col-md-6 d-flex justify-content-center'>
              <article className='text-center'>
                <h4>Related Topics</h4>

                <p>Arduino UNO</p>

                <p>Basic Electronics</p>

                <p> IR Sensor</p>

                <p> IR Sensor</p>

              </article>
            </div>
            <div className='col-md-6 d-flex justify-content-center'>
              <article className='d-flex flex-column align-items-center' >
                <h4 >Useful Links</h4>

                <p><a className=' text-decoration-none' href="#">Link 1</a></p>

                <p><a className='text-decoration-none' href="#">Link 2</a></p>

                <p><a className='text-decoration-none' href="#">Link 3</a></p>

                <p><a className='text-decoration-none' href="#">Link 4</a></p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

function fetchProjectData() {
  // Simulate fetching project data from your database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ /* Your project data based on id */ });
    }, 2000); // Simulate a 2-second delay
  });
}


export default Project;
