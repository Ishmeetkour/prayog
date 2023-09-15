import { useContext } from 'react';
import AppContext from '../context/context';
export default function Footer() {
    const states = useContext(AppContext);
    const { darkTheme } = states;
    return (
        <footer className={darkTheme ? 'bg-black text-light' : 'bg-body-secondary'}>

            <div className="row g-0 py-1">
                <div className="col-md-7 px-2 text-center text-md-start">
                    <h4>Contact Us</h4>
                    <p className='m-0'>Email: contact@prayog.com</p>
                    <p className='my-1'>Phone:9758454523</p>
                </div>
                <div className="col-md-5  px-3">

                    <h4 className='text-center text-md-start' >About Us</h4>
                    <p className='text-center text-md-start'>
                        Started in 2023 Prayog an initiative by BTKIT students grows exponentially through its research in technology.NevonProjects works towards development of research based software, embedded/electronics and mechanical systems for research & development purposes.
                    </p>

                </div>
            </div>
            <hr className='m-0'></hr>
            <div className='row g-0 py-1 px-2'>
                <div className='col-md-6 d-lg-flex align-items-center '>
                    <p className='text-center text-md-start my-1' >&copy; Prayog</p>
                </div>
                <div className='col-md-6'>
                    <div className="icons d-flex justify-content-center align-items-center flex-row gap-5">
                        <h4 className='m-0 d-none d-lg-block'>Find us at</h4>
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}
