import React from 'react'
import "./Dashboard.css"
import TodaysInterview from './TodaysInterview'
import CandidateStatus from './CandidateStatus/CandidateStatus'
import TaskDetail from './TaskDetails/TaskDetail'
import ApplicationInfo from './ApplicationInfo/ApplicationInfo'
import { Calendar } from './Calendar'
import PostedJob from './PostedJobs/PostedJob'
import Upcomings from './Upcomings'
import HiringCandidates from './HiringCandidates/HiringCandidates'
import Activity from './Activity/Activity'
const Dashboard = () => {
  return (
    <>
      <TaskDetail />
      <div className='row'>
        <div className='col-md-12 col-sm-12 ps-5 py-1'>
          <ApplicationInfo />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-9 col-sm-12 ps-5 py-1'>
          <TodaysInterview />
          <PostedJob />
          <br />
          <CandidateStatus />
        </div>
        <div className='col-md-3 col-sm-12 ps-5 py-1'>
          <Calendar />
          <Upcomings />
          <Activity />
          <HiringCandidates />
        </div>
      </div>
    </>
  )
}

export default Dashboard