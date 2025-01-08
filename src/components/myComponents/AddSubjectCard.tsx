"use client"

import React, { FormEvent, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import apiClient from '@/lib/apiClient'
import useSession from '@/lib/useSession'
import { revalidatePath } from 'next/cache'

const AddSubjectCard = () => {
    const [subjectName, setSubjectName] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const session = useSession()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setError("")
            setMessage("")
            const subject = await apiClient.post(`/v1/subject/${session?.id}`, {
                body: {
                    name: subjectName
                },
                cache: "no-cache"
            })

            setMessage("add new subject success")
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <Card>
            <CardHeader className='font-bold text-lg'>Add New Subject</CardHeader>
            <CardContent className='space-y-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='font-semibold'>Subject Name</label>
                        <Input value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
                    </div>
                    <p className='font-medium text-green-500'>{message}</p>
                    <p className='font-medium text-red-500'>{error}</p>
                    <div className='flex w-full justify-end items-end'>
                        <Button>Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default AddSubjectCard