import React from 'react'
import Activity from './Activity/Activity'
import Upcomings from './Upcomings'
import HiringCandidates from './HiringCandidates/HiringCandidates'
export const Calendar = () => {
    return (
        <div className='Right-layout'>
            <div className='Calendar-layout'>
                <div className='Calendar'>
                    Calendar
                </div>
            </div>
            <Upcomings />
            <Activity />
            <HiringCandidates />
        </div>
    )
}
