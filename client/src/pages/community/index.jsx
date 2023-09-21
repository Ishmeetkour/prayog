import { useContext, useState } from "react"
import AppContext from "../../context/context"
import Collapse from 'react-bootstrap/Collapse';
export default function Community() {
    const states = useContext(AppContext);
    const { darkTheme } = states;
    const [CommunityTab, setCommunityTab] = useState(true)
    const [open, setOpen] = useState(false);
    return (
        <body className={`${darkTheme ? 'bg-dark text-light' : ''}`}>
            <div className="container py-3">
                <div className='row'>
                    <div className='col-md-6'><h1 >Community</h1></div>
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
                                <option value={1}>Newest First</option>
                                <option value={2}>Most Active</option>
                                <option value={3}>Most Members</option>
                            </select>
                        </div>
                    </div>
                </Collapse>
                <div className="row g-0">
                    <div style={{ height: '75vh' }} className="col-md-4 pe-5 pt-0">
                        <div className="h-100 list-group overflow-auto">
                            {
                                Array.from({ length: 20 }, (_, i) => (
                                    <div key={i}
                                        className={`list-group-item list-group-item-action ${darkTheme ? 'list-group-item-dark' : 'list-group-item-light'} d-flex justify-content-around align-items-center`}
                                        data-bs-theme={darkTheme ? 'dark' : ''}
                                    >
                                        <div className="w-100"><p className="m-0">Electronics</p></div>
                                        <i className="fa-solid fa-lg fa-door-closed"></i>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    {
                        CommunityTab
                            ? <div style={{ height: '75vh' }}
                                className="border-2 bg-secondary col-md-8 d-flex flex-column"
                            >
                                <div className="px-3 d-flex flex-row justify-content-between align-items-center">
                                    <p className="my-2">Community Name</p>
                                    <button onClick={() => setCommunityTab(!CommunityTab)} className="btn btn-sm btn-warning">Leave</button>
                                </div>
                                <div style={{ height: '95%' }} className="overflow-auto">
                                    {
                                        Array.from({ length: 10 }, (_, i) => (
                                            <section
                                                key={i}
                                                className={`list-group-item  ${darkTheme ? 'list-group-item-dark' : 'list-group-item-light'
                                                    } p-3 rounded-0 card`}
                                                data-bs-theme={darkTheme ? 'dark' : ''}
                                            >
                                                <div className="row align-items-center g-0">
                                                    <div className="col-md-1">
                                                        <img style={{ height: '50px', width: '50px' }} src="/images/user.png" className="img-fluid rounded-circle" alt="..." />
                                                    </div>
                                                    <div className="col-md-11">
                                                        <div className="card-body">
                                                            <h5 className="card-title">User</h5>
                                                            <p className="card-text m-0">
                                                                It is a message It is a message It is a message It is a message It is a messageIt is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message It is a message
                                                            </p>
                                                            <p className="card-text m-0"><small>{new Date().toLocaleString()}</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        ))
                                    }
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <input type="text" style={{ width: '85%' }} className="h-100" />
                                    <button style={{ width: '15%' }} className="rounded-0 h-100 btn btn-success">
                                        <i className="fa-regular fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>

                            : <div style={{ height: '75vh' }} className="border-2 bg-secondary col-md-8  d-flex justify-content-center align-items-center">
                                Join a Community to See Discussion
                            </div>
                    }

                </div>
            </div>
        </body>
    )
}
