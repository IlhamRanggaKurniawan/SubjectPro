import ScheduleCard from '@/components/myComponents/ScheduleCard'
import TodayTaskCard from '@/components/myComponents/TodayTaskCard'
import WeeklyOverview from '@/components/myComponents/WeeklyOverview'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {

  return (
    <div className='p-8 w-full'>
      <h1 className='text-4xl font-bold mb-8'>Dashboard</h1>
      <div className='flex flex-col gap-6'>
        <div className='grid grid-cols-2 gap-6'>
          <ScheduleCard />
          <TodayTaskCard />
        </div>
        <div>
          <WeeklyOverview />
        </div>
      </div>
    </div>
  )
}

export default page