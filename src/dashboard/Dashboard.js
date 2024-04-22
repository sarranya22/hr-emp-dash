import React from 'react'
import "./Dashboard.css"
import TodaysInterview from './TodaysInterview'
const Dashboard = () => {
  return (
    <div>
    <div className='Dashboard-layout'>
        <div className='Hr-emp'>HR Employee</div>
        <div className='Hr-content'>Enjoy your selecting potential candidates Tracking and Management System.</div>
    </div>
    <TodaysInterview />
    </div>
  )
}

export default Dashboard