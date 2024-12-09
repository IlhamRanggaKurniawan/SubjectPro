import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const ScheduleCard = () => {
    return (
        <Card className='w-full'>
            <CardHeader>
                <div className='flex justify-between items-center'>
                    <CardTitle className='text-2xl'>Today Schedule</CardTitle>
                    <span className='text-slate-700'>Tuesday</span>
                </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
                <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                        <span>PIPAS (211)</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400"> 07:00 - 08:20</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span>B.JAWA (211)</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400"> 08:20 - 09:40</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span>DD-PPLG (215)</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400"> 10:00 - 11:20</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span>BK (213)</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400"> 11:20 - 12:00</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span>PKN (213)</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400"> 12:30 - 13:50</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span>B.INGGRIS (210)</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400"> 14:10 - 15:30</span>
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default ScheduleCard