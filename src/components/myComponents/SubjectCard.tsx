import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Book, GraduationCap } from 'lucide-react'
import { Task } from '../../../types/entity'

const SubjectCard = ({ subject, color, startTime, endTime, tasks }: { subject: string, color: string, startTime: string, endTime: string, tasks: Task[] }) => {
  return (
    <Card className='relative'>
      <div className="absolute top-0 left-0 w-full h-2 rounded-t-lg" style={{ "backgroundColor": color }} />
      <CardContent className='mt-8 flex flex-col gap-6'>
        <div className='flex items-center gap-2'>
          <GraduationCap color={color} size={30} />
          <h3 className='text-lg font-bold'>{subject}</h3>
        </div>
        <div className="w-full h-fit rounded-full" style={{ "backgroundColor": `${color}20` }}>
          <p className="px-2" style={{ "color": color }}>{startTime}-{endTime}</p>
        </div>
        <div className='flex items-start gap-2'>
          <h5>Tasks:</h5>
          <div>
            {tasks && tasks.map((task) => (
              <div className="flex items-center" style={{ "color": `${color}` }} key={task.Id}>
                <Book size={17} />
                <p >{task.Type}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SubjectCard