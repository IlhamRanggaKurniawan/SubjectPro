"use client"

import React, { FormEvent, useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { DatePicker } from '../ui/datePicker'
import { Button } from '../ui/button'
import { Subject } from '../../../types/entity'
import apiClient from '@/lib/apiClient'
import useSession from '@/lib/useSession'

const AddTaskCard = () => {
    const [subjects, setSubjects] = useState<Subject[]>()
    const [subjectId, setSubjectId] = useState(0)
    const [taskType, setTaskType] = useState("")
    const [note, setNote] = useState("")
    const [deadline, setDeadline] = useState<Date>()
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const session = useSession()

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                console.log(session?.classId)
                const subjects = await apiClient.get(`/v1/subject/${session?.classId}`, {
                    cache: "no-cache"
                })

                setError("")
                setSubjects(subjects)
            } catch (error: Error) {
                setError(error.message)
            }
        }

        fetchSubject()
    }, [session])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setMessage("")
            setError("")
            if (!deadline) return setError("fill all input field")
            const formattedDeadline = deadline?.toLocaleDateString('id-ID', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }).replace(/\//g, '-')

            const task = await apiClient.post(`/v1/task/${subjectId}`, {
                body: {
                    taskType: taskType,
                    note: note,
                    deadline: formattedDeadline
                },
                cache: "no-cache"
            })

            setMessage("Add New Task Success")


        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <Card>
            <CardHeader className='font-bold text-lg'>Add New Task</CardHeader>
            <CardContent className='space-y-4'>
                <form onSubmit={handleSubmit}>
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
                    <div>
                        <label className='font-semibold'>Task Type</label>
                        <Input required value={taskType} onChange={(e) => setTaskType(e.target.value)} />
                    </div>
                    <div>
                        <label className='font-semibold'>Note</label>
                        <Textarea required value={note} onChange={(e) => setNote(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold'>Deadline</label>
                        <DatePicker date={deadline} setDate={setDeadline} />
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

export default AddTaskCard