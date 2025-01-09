"use client"

import React, { FormEvent, useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import apiClient from '@/lib/apiClient'
import useSession from '@/lib/useSession'
import { useDebounce } from 'use-debounce';

type user = {
    Id: number,
    Username: string,
    Email: string,
    ClassId: number
}

const AddStudentCard = () => {
    const [email, setEmail] = useState("")
    const [emailDebouce] = useDebounce(email, 400)
    const [users, setUsers] = useState<user[]>([])
    const [selectedUsers, setSelectedUsers] = useState<user[]>([])
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const session = useSession()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setEmail("")
            setMessage("")

            await apiClient.patch(`/v1/class/${session?.classId}`, {
                body: {
                    Students: selectedUsers.map((user) => user.Email)
                },
                cache: "no-cache"
            })

            setUsers([])
            setSelectedUsers([])
            setMessage("add new student success")
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSelectUser = ({ user }: { user: user }) => {
        if (selectedUsers.find((prev) => prev.Id === user.Id)) {
            return setSelectedUsers(selectedUsers.filter((prev) => prev.Id !== user.Id))
        }

        return setSelectedUsers((prev) => [...prev, user])
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if(email.length === 0) return
                const user = await apiClient.get(`/v1/user?email=${email}`, {
                    cache: "no-cache"
                })
                setUsers(user)
            } catch (error) {
                setError(error.message)
            }
        }

        fetchUser()
    }, [emailDebouce])

    return (
        <Card>
            <CardHeader className='font-bold text-lg'>Add New Student</CardHeader>
            <CardContent className='space-y-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='font-semibold'>Student Email</label>
                        <Input onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='space-y-2'>
                        {users && users.map((user) => {
                            const isSelected = selectedUsers.some((selectedUser) => selectedUser.Id === user.Id);
                            if (user.ClassId != 0) return
                            return (
                                <Card key={user.Id} className={`p-2 ${isSelected ? "bg-gray-200" : ""} cursor-pointer`} onClick={() => handleSelectUser({ user })}>
                                    <h6 className='text-lg font-bold'>{user.Username}</h6>
                                    <p>{user.Email}</p>
                                </Card>
                            )
                        })}
                        <h6></h6>
                    </div>
                    <p className='text-green-500'>{message}</p>
                    <p className='text-red-500'>{error}</p>
                    <div className='flex w-full justify-end'>
                        <Button>Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card >
    )
}

export default AddStudentCard