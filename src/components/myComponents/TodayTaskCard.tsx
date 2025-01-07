import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Subject } from '../../../types/entity'

const TodayTaskCard = ({ subjects }: { subjects: Subject[] }) => {

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
          {subjects && subjects.map((subject) => {
            return subject.Tasks.map((task) => (
              <li className="flex justify-between items-center" key={task.Id}>
                <span>{subject.Name}</span>
                <span className="text-sm text-blue-500 dark:text-gray-400">{task.Type}</span>
              </li>
            ))
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

export default TodayTaskCard