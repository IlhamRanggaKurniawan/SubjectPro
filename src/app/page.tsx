import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const page = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className='p-8 w-full'>
      <h1 className='text-4xl font-bold mb-8'>Dashboard</h1>
      <div className='flex flex-col gap-6'>
        <div className='grid grid-cols-2 gap-6'>
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
          <Card className='w-full'>
            <CardHeader>
              <div className='flex justify-between items-center'>
                <CardTitle className='text-2xl'>Today Task</CardTitle>
                <span className='text-slate-700'>Tuesday</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>PPLG</span>
                  <span className="text-sm text-blue-500 dark:text-gray-400">Tugas Individu</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>PKN</span>
                  <span className="text-sm text-blue-500 dark:text-gray-400">Tugas Kelompok</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>B.INGGRIS</span>
                  <span className="text-sm text-blue-500 dark:text-gray-400">Ujian Proyek</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle className='text-2xl'>Weekly Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-7 gap-4'>
                {days.map((day) => (
                  <div className='flex flex-col h-full w-full justify-center items-center' key={day}>
                    <Button variant="ghost" key={day} className={`flex-col h-fit w-fit ${day == "Thu" && "bg-blue-200"}`}>
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
        </div>
      </div>
    </div>
  )
}

export default page