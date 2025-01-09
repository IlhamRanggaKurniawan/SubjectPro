import CreateClassDialog from '@/components/myComponents/CreateClassDialog'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import getSession from '@/lib/getSession'
import { BarChart, Calendar, CheckCircle, User, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = async () => {
    const session = await getSession()
    return (
        <div>
            <div className='flex justify-between w-full items-center h-14 px-4'>
                <h1 className='text-lg font-bold'>Subject Pro</h1>
                {session ? (
                    session?.classId ? (
                        <Link href="/dashboard" className='border border-black p-1 rounded-md'>Class</Link>
                    ) : (
                        <CreateClassDialog>
                            <p className='border border-black p-1 rounded-md'>Create Class</p>
                        </CreateClassDialog>
                    ))
                    : (
                        <Link href="/login" className='border border-black p-1 rounded-md'>Login</Link>
                    )}
            </div>
            <div className='h-72 flex flex-col items-center gap-4 justify-center px-2 md:h-[500px]'>
                <h3 className='text-3xl font-extrabold text-center md:text-4xl md:max-w-[500px] lg:text-6xl lg:max-w-[700px]'>Manage Your Classes with Ease</h3>
                <p className='text-slate-500 text-center md:max-w-[500px] md:text-xl lg:max-w-[700px]'>Subject Pro helps educators streamline their teaching process, manage students, and track progress all in one place.</p>
            </div>
            <div className='bg-gray-100 py-6 lg:py-24'>
                <h4 className='text-2xl font-bold text-center md:text-3xl lg:text-5xl'>Key Features</h4>
                <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Card>
                        <CardHeader>
                            <User size={35} />
                            <h6 className='text-xl font-bold'>Student Management</h6>
                        </CardHeader>
                        <CardContent>
                            <p>Easily manage student profiles, attendance, and performance tracking.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Calendar size={35} />
                            <h6 className='text-xl font-bold'>Class Scheduling</h6>
                        </CardHeader>
                        <CardContent>
                            <p>Create and manage class schedules with our intuitive calendar interface.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <BarChart size={35} />
                            <h6 className='text-xl font-bold'>Progress Tracking</h6>
                        </CardHeader>
                        <CardContent>
                            <p>Monitor student progress with detailed analytics and reporting tools.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className='py-8 lg:py-24'>
                <h4 className='text-3xl font-bold text-center mb-8 md:text-3xl lg:text-5xl'>How It Works</h4>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-3 '>
                    <div className='px-4 flex flex-col items-center gap-2'>
                        <div className='rounded-full bg-black p-3 w-fit'>
                            <CheckCircle size={24} color='#fff' />
                        </div>
                        <h6 className='font-bold text-lg text-center lg:text-2xl'>1. Sign Up</h6>
                        <p className='text-center'>Create your account and set up your school or institution profile.</p>
                    </div>
                    <div className='px-4 flex flex-col items-center gap-2'>
                        <div className='rounded-full bg-black p-3 w-fit'>
                            <Users size={24} color='#fff' />
                        </div>
                        <h6 className='font-bold text-lg text-center lg:text-2xl'>2. Add Students</h6>
                        <p className='text-center'>Import or manually add your students to the system.</p>
                    </div>
                    <div className='px-4 flex flex-col items-center gap-2'>
                        <div className='rounded-full bg-black p-3 w-fit'>
                            <Zap size={24} color='#fff' />
                        </div>
                        <h6 className='font-bold text-lg text-center lg:text-2xl'>3. Start Managing</h6>
                        <p className='text-center'>Begin using the features to manage classes, track progress, and more.</p>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 h-16 flex justify-center items-center'>
                <p className='text-slate-500 text-sm'>© 2023 Subject Pro. All rights reserved.</p>
            </div>
        </div>
    )
}

export default page