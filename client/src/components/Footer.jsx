import React from 'react';
export default function Footer() {
    return (
        <footer>

            <div className="row g-0 bg-body-secondary">
                <div className="col-md-7 d-flex px-2 justify-content-between">
                    <div>
                        <h4>Contact Us</h4>
                        <p>Email: contact@prayog.com</p>
                        <p>Phone:9758454523</p>
                    </div>
                </div>
                <div className="col-md-5  px-3">

                    <h4>About Us</h4>
                    <p>
                        Started in 2023 Prayog an initiative by BTKIT students grows exponentially through its research in technology.NevonProjects works towards development of research based software, embedded/electronics and mechanical systems for research & development purposes.
                    </p>

                </div>
            </div>
            <hr className='m-0'></hr>
            <div className='row g-0 px-2'>
                <div className='col-md-6'>
                    <p >&copy; Prayog</p>
                </div>
                <div className='col-md-6'>
                    <div className="icons d-flex justify-content-end flex-row gap-5">

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
