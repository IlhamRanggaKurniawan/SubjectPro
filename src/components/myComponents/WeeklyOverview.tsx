import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const WeeklyOverview = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle className='text-2xl'>Weekly Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
                    {days.map((day) => (
                        <div className='flex flex-col h-full w-full justify-center items-center' key={day}>
                            <Button variant="ghost" key={day} className={`flex-col h-fit w-fit px-6 ${day == "Thu" && "bg-blue-200"}`}>
                                <span className='font-semibold text-lg'>{day}</span>
                                <div className='bg-secondary h-12 w-12 rounded-full flex justify-center items-center'>
                                    {Math.floor(Math.random() * 5) + 1}
                                </div>
                                <span className='text-gray-500 text-sm'>Tasks</span>
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default WeeklyOverview