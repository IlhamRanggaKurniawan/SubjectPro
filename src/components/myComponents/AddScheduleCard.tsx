"use client"

import React, { FormEvent, useEffect, useState } from 'react'
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
    const [message, setMessage] = useState("")
    const [startTimeHour, setStartTimeHour] = useState<number>()
    const [startTimeMinute, setStartTimeMinute] = useState<number>()
    const [endTimeHour, setEndTimeHour] = useState<number>()
    const [endTimeMinute, setEndTimeMinute] = useState<number>()
    const session = useSession()

    const handleMinute = ({ number, setter }: { number: number, setter?: React.Dispatch<React.SetStateAction<number | undefined>> }) => {
        if (number >= 0 && number < 60) {
            if (setter) {
                setter(number)
            }
        }
    }

    const handleHour = ({ number, setter }: { number: number, setter?: React.Dispatch<React.SetStateAction<number | undefined>> }) => {
        if (number >= 0 && number < 24) {
            if (setter) {
                setter(number)
            }
        }
    }

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const subjects = await apiClient.get(`/v1/subject/${session?.classId}`, {
                    cache: "no-cache"
                })

                setSubjects(subjects)
                setError("")
            } catch (error) {
                setError(error.message)
            }
        }

        fetchSubject()
    }, [session])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            await apiClient.post(`/v1/schedule/${subjectId}`, {
                body: {
                    day,
                    startTime: `${startTimeHour}:${startTimeMinute}`,
                    endTime: `${endTimeHour}:${endTimeMinute}`,
                },
                cache: "no-cache"
            })

            setMessage("add new schedule success")
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <Card>
            <CardHeader className='font-bold text-lg'>Add New Schedule</CardHeader>
            <CardContent className='space-y-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='font-semibold'>Day</label>
                        <Select onValueChange={(e) => setDay(e)} required>
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
                    <div className='flex flex-col gap-6 md:items-center md:flex-row'>
                        <div>
                            <label className='font-semibold'>Start Time</label>
                            <div className='flex items-center gap-3'>
                                <Input className='w-16' type='number' required value={startTimeHour} onChange={(e) => handleHour({ number: +e.target.value, setter: setStartTimeHour })} />
                                <span className='font-bold text-xl'>:</span>
                                <Input className='w-16' type='number' required value={startTimeMinute} onChange={(e) => handleMinute({ number: +e.target.value, setter: setStartTimeMinute })} />
                            </div>
                        </div>
                        <span className='text-xl font-bold hidden md:block'>-</span>
                        <div>
                            <label className='font-semibold'>End Time</label>
                            <div className='flex items-center gap-3'>
                                <Input className='w-16' type='number' required value={endTimeHour} onChange={(e) => handleHour({ number: +e.target.value, setter: setEndTimeHour })} />
                                <span className='font-bold text-xl'>:</span>
                                <Input className='w-16' type='number' required value={endTimeMinute} onChange={(e) => handleMinute({ number: +e.target.value, setter: setEndTimeMinute })} />
                            </div>
                        </div>
                    </div>
                    <p className='font-medium text-green-500'>{message}</p>
                    <p className='font-medium text-red-500'>{error}</p>
                    <div className='flex w-full justify-end'>
                        <Button>Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default AddScheduleCard