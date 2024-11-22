import TaskCard from '@/components/myComponents/TaskCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookOpen, Calendar, Clock, NotepadText } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div className='p-8 w-full'>
            <h1 className='text-4xl font-bold mb-8'>Tasks</h1>
            <div className='flex gap-3 items-center justify-end mb-6'>
                <Select>
                    <SelectTrigger className='w-48'>
                        <SelectValue placeholder="All Subject" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='ALL'>All Subject</SelectItem>
                        <SelectItem value='PPLG'>PPLG</SelectItem>
                        <SelectItem value='MATH'>MATH</SelectItem>
                        <SelectItem value='Sejarah'>Sejarah</SelectItem>
                        <SelectItem value='B.INGGRIS'>B.INGGRIS</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className='w-48'>
                        <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='all'>All Statuses</SelectItem>
                        <SelectItem value='PPLG'>PPLG</SelectItem>
                        <SelectItem value='MATH'>MATH</SelectItem>
                        <SelectItem value='Sejarah'>Sejarah</SelectItem>
                        <SelectItem value='B.INGGRIS'>B.INGGRIS</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='PPLG' type='Assessment'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='MTK' type='Homework'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='PIPAS' type='Assessment'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='Sejarah' type='Project'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur! asdijoasjdijasiudj aiud uias duiashduiah uidahsuidhauih aoifjaudua hahgdy aywgd yawgd awg dgaw dgawgd 7awgd76tawg7d6aw d76aw d7g6awgd76awgd76awg76dawg7da wg76dgaw7 gdaw7 gdadgaiugdiugaywg ay' subject='Informatika' type='Project'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='Sejarah' type='Assessment'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='Sejarah' type='Homework'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='Sejarah' type='Project'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='Sejarah' type='Project'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='Sejarah' type='Homework'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='Sejarah' type='Assessment'/>
                <TaskCard deadline='16 November 2024' notes='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consectetur!' subject='Sejarah' type='Assessment'/>
                
            </div>
        </div>
    )
}

export default page