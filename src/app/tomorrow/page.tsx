import SubjectCard from '@/components/myComponents/SubjectCard'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import React from 'react'

const page = () => {
    return (
        <div className='p-8 w-full'>
            <h1 className='text-4xl font-bold mb-3'>Tomorrow's Schedule</h1>
            <h3 className='text-xl text-slate-500 mb-4'>Tuesday-3-December-2024</h3>
            <Card className='w-full h-full shadow-lg bg-white mb-8'>
                <CardContent className='p-6'>
                    <div className='flex items-center justify-between mb-4'>
                        <h4 className='text-xl font-semibold'>Task Progress</h4>
                        <div className='bg-slate-200 p-2 rounded-full'>
                            <p className='text-sm font-semibold'>14% Complete</p>
                        </div>
                    </div>
                    <Progress className='w-full h-3' value={20}/>
                </CardContent>
            </Card>
            <div className='grid grid-cols-4 gap-4'>
                <SubjectCard color='#4CAF50'/>
                <SubjectCard color='#2196F3'/>
                <SubjectCard color='#FFC107'/>
                <SubjectCard color='#9C27B0'/>
            </div>
        </div>
    )
}

export default page