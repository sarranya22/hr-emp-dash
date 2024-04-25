import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/Header';
import Sidenav from '../sidenav/Sidenav';
import Dashboard from '../dashboard/Dashboard';
const Layouts = () => {
  return (
    <>
      <div className="row grow">
        <Header />
      </div>
      <div className="row w-100">
        <div className="col-md-1 col-sm-12 py-5">
          <Sidenav />
        </div>
        <div className="col-md-11 col-sm-12">
          <div className='row'>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layouts