import React from 'react'
import { Card, CardContent } from '../ui/card'
import { GraduationCap, MapPin } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'

const SubjectCard = ({ color }: { color: string }) => {
  return (
    <Card className='relative'>
      <div className={`absolute top-0 left-0 w-full h-2 rounded-t-lg`} style={{"backgroundColor": color}}/>
      <CardContent className='mt-8 flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <GraduationCap color={color} />
          <h3 className='font-bold'>Mathematics</h3>
        </div>
        <div className={`w-full h-fit rounded-full`} style={{"backgroundColor": `${color}20`}}>
          <p className={` px-2 text-xs`} style={{"color": color}}>09:00-10:30</p>
        </div>
        <div className='flex items-center gap-2'>
          <MapPin color={color} size={15} />
          <span className='text-xs text-slate-400'>Room 201</span>
        </div>
        <h5 className='text-sm'>Tasks:</h5>
        <div className='flex items-start gap-2'>
          <Checkbox id='1' />
          <label htmlFor="1" className="text-xs">
            Tugas
          </label>
        </div>
      </CardContent>
    </Card>
  )
}

export default SubjectCard