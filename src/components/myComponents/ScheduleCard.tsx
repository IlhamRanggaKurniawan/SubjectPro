import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Subject } from '../../../types/entity'

const ScheduleCard = ({ subjects }: { subjects: Subject[] }) => {

    return (
        <Card className='w-full'>
            <CardHeader>
                <div className='flex justify-between items-center'>
                    <CardTitle className='text-2xl'>Today Schedule</CardTitle>
                    {/* <span className='text-slate-700'>{dayName}</span> */}
                </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
                <ul className="space-y-2">
                    {subjects && subjects.map((subject) => {
                        return subject.Schedules.map((schedule) => (
                            <li className="flex justify-between items-center" key={schedule.Id}>
                                <span>{subject.Name}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400"> {schedule.StartTime} - {schedule.EndTime}</span>
                            </li>
                        ))
                    })}
                </ul>
            </CardContent>
        </Card>
    )
}

export default ScheduleCard