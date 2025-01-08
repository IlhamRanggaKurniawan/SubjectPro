"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const AddStudentCard = () => {
   
    return (
        <Card>
            <CardHeader className='font-bold text-lg'>Add New Student</CardHeader>
            <CardContent className='space-y-4'>
                <div>
                    <label className='font-semibold'>Student Email</label>
                    <Input />
                </div>
                <div className='flex w-full justify-end'>
                    <Button>Submit</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default AddStudentCard