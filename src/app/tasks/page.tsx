import TaskCard from '@/components/myComponents/TaskCard'
import React from 'react'
import { Subject } from '../../../types/entity'
import api from '@/lib/api'

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
            <h1 className='text-4xl font-bold mb-8'>Tasks</h1>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {subjects && subjects.map((subject) => {
                    return subject.Tasks.map((task) => (
                        <TaskCard key={task.Id} deadline={task.Deadline} notes={task.Note} subject={subject.Name} type={task.Type} />
                    ))
                })}
            </div>
        </div>
    )
}

export default page