import React from 'react'
import "./Dashboard.css"
import ApplicationInfo from './ApplicationInfo/ApplicationInfo'
import PostedJob from './PostedJobs/PostedJob'
import user1 from '../../src/assets/user1.png'

const TodaysInterview = () => {
  return (
    <>
      {/* <div className='Interview-Layout'>
        <div className='TodaysInterview-Layout'>
          <div className='TodaysInterview-Text'>Bar Chart</div>
        </div>
        <div className='Interview-meeting'>

        </div>
      </div> */}
      <ApplicationInfo />
      <PostedJob />

      <div className='Interview-Layout'>
        <div className='TodaysInterview-Layout'>
          <div className='TodaysInterview-Text'>Today Interviews Meetings Info</div>
          {/* <hr /> */}
        </div>

        {/* <div className='Interview-meeting'>
        <img src={user1} className="user-icon" alt="logo" />
        <div>
          <div htmlFor="" className='label-text'>John Smith</div>
          <div htmlFor="" className='jobDesc'>Senior Python Developer</div>
        </div>
        </div> */}
      </div>
    </>

  )
}

export default TodaysInterview