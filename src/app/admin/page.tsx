import AddScheduleCard from '@/components/myComponents/AddScheduleCard'
import AddStudentCard from '@/components/myComponents/AddStudentCard'
import AddSubjectCard from '@/components/myComponents/AddSubjectCard'
import AddTaskCard from '@/components/myComponents/AddTaskCard'
import React from 'react'

const page = () => {
    return (
        <div className='p-2 md:p-8 w-full'>
            <h1 className='text-4xl font-bold mb-8'>Admin Dashboard</h1>
            <div className='grid lg:grid-cols-2 gap-6'>
                <AddTaskCard />
                <AddSubjectCard />
                <AddScheduleCard />
                <AddStudentCard />
            </div>
        </div>
    )
}

export default page