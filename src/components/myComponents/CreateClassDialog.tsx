"use client"

import React, { FormEvent, useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import apiClient, { getToken } from '@/lib/apiClient'
import { useRouter } from 'next/navigation'

const CreateClassDialog = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState("")
    const router = useRouter()

    const handleSubmit = async(e : FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const newClass = await apiClient.post("/v1/class", {
                body: {
                    name
                }, 
                cache: "no-cache"
            })

            getToken()

            router.push("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Crate New Class</DialogTitle>
                </DialogHeader>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div>
                        <label className='font-semibold'>Class Name</label>
                        <Input required onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <DialogClose className='flex w-full justify-end'>
                        <Button>Submit</Button>
                    </DialogClose>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateClassDialog