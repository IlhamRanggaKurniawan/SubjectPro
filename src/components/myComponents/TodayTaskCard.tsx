import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const TodayTaskCard = () => {
  return (
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
  )
}

export default TodayTaskCard