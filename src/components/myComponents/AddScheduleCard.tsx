"use client"

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Subject } from '../../../types/entity'
import useSession from '@/lib/useSession'
import apiClient from '@/lib/apiClient'

const AddScheduleCard = () => {
    const [subjects, setSubjects] = useState<Subject[]>()
    const [day, setDay] = useState("")
    const [subjectId, setSubjectId] = useState(0)
    const [error, setError] = useState("")
    const [startTimeHour, setStartTimeHour] = useState(0)
    const [startTimeMinute, setStartTimeMinute] = useState(0)
    const [endTimeHour, setEndTimeHour] = useState(0)
    const [endTimeMinute, setEndTimeMinute] = useState(0)
    const session = useSession()

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const subjects = await apiClient.get(`/v1/subject/${session?.classId}`, {
                    cache: "no-cache"
                })

                setSubjects(subjects)
            } catch (error) {
                setError(error.message)
            }
        }

        fetchSubject()
    }, [])

    useEffect(() => {
        console.log(startTimeHour)
    },[startTimeHour])
    return (
        <Card>
            <CardHeader className='font-bold text-lg'>Add New Schedule</CardHeader>
            <CardContent className='space-y-4'>
                <div>
                    <label className='font-semibold'>Day</label>
                    <Select onValueChange={(e) => setDay(e)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value='Monday'>Monday</SelectItem>
                                <SelectItem value='Tuesday'>Tuesday</SelectItem>
                                <SelectItem value='Wednesday'>Wednesday</SelectItem>
                                <SelectItem value='Thursday'>Thursday</SelectItem>
                                <SelectItem value='Friday'>Friday</SelectItem>
                                <SelectItem value='Saturday'>Saturday</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='font-semibold'>Subject Name</label>
                    <Select onValueChange={(e) => setSubjectId(+e)} required>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup >
                                {subjects && subjects.map((subject) => (
                                    <SelectItem value={subject.Id.toString()} key={subject.Id}>{subject.Name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex gap-6 items-center'>
                    <div>
                        <label className='font-semibold'>Start Time</label>
                        <div className='flex items-center gap-3'>
                            <Input className='w-12' type='number' onChange={(e) =>  setStartTimeHour(+e.target.value)}/>
                            <span className='font-bold text-xl'>:</span>
                            <Input className='w-12' type='number' />
                        </div>
                    </div>
                    <span className='text-xl font-bold'>-</span>
                    <div>
                        <label className='font-semibold'>End Time</label>
                        <div className='flex items-center gap-3'>
                            <Input className='w-12' type='number' />
                            <span className='font-bold text-xl'>:</span>
                            <Input className='w-12' type='number' />
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-end'>
                    <Button>Submit</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default AddScheduleCard