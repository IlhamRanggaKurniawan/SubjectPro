import ScheduleCard from '@/components/myComponents/ScheduleCard'
import TodayTaskCard from '@/components/myComponents/TodayTaskCard'
import api from '@/lib/api'
import React from 'react'
import { Subject } from '../../../../types/entity'

const page = async () => {
  const date = new Date()

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
  const formattedDate = date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-')

  const subjects: Subject[] = await api.get(`/v1/subject/1/${dayName}/${formattedDate}`, {
    cache: "reload"
  })

  return (
    <div className='p-2 md:p-8 w-full'>
      <h1 className='text-4xl font-bold mb-8'>Dashboard</h1>
      <div className='flex flex-col gap-6'>
        <ScheduleCard subjects={subjects} />
        <TodayTaskCard subjects={subjects} />
        {/* <WeeklyOverview /> */}
      </div>
    </div>
  )
}


export default page