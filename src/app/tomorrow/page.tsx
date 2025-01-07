import SubjectCard from '@/components/myComponents/SubjectCard'
import api from '@/lib/api'
import React from 'react'
import { Subject } from '../../../types/entity'

const page = async () => {
    const date = new Date()
    const colors = ['#4CAF50', '#2196F3', '#ffcd38', '#9C27B0', '#FF5722', '#673AB7'];

    date.setDate(date.getDate() + 1)

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const subjects: Subject[] = await api.get(`/v1/subject/1/${dayName}`, {
        cache: "no-cache"
    })

    return (
        <div className='p-2 md:p-8 w-full'>
            <h1 className='text-4xl font-bold mb-3'>Tomorrow Schedule</h1>
            <h3 className='text-xl text-slate-500 mb-4'>Tuesday-3-December-2024</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {subjects && subjects.map((subject) => {
                    return subject.Schedules.map((schedule) => (
                        <SubjectCard key={schedule.Id} subject={subject.Name} tasks={subject.Tasks} color={getRandomColor()} startTime={schedule.StartTime} endTime={schedule.EndTime} />
                    ))
                })}
                {/* <SubjectCard color='#2196F3' />
                <SubjectCard color='#FFC107' />
                <SubjectCard color='#9C27B0' /> */}
            </div>
        </div>
    )
}

export default page