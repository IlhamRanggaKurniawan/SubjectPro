import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { BookOpen, Calendar, Clock, NotepadText } from 'lucide-react'

const TaskCard = ({ subject, type, deadline, notes }: { subject: string, type: "Homework" | "Project" | "Assessment", deadline: string, notes: string }) => {
    let color

    switch (type) {
        case "Homework":
            color = "green-500"
            break;
        case "Assessment":
            color = "red-500"
            break;
        case "Project":
            color = "blue-500"
    }

    return (
        <Card className='relative hover:scale-105 hover:shadow-xl transition-all duration-300'>
            <div className={`absolute top-0 left-0 w-2 h-full bg-${color} rounded-l-full`} />
            <CardHeader>
                <CardTitle>
                    {subject}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-2'>
                    <div className={`flex items-center gap-2 text-sm text-${color}`}>
                        <BookOpen size={20} />
                        <p>{type}</p>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-slate-500'>
                        <Calendar size={20} />
                        <p>{deadline}</p>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-slate-500'>
                        <Clock size={20} />
                        <p>2 day left</p>
                    </div>
                    <div className='flex flex-col gap-2 text-sm'>
                        <div className='flex items-center gap-2'>
                            <NotepadText size={20} />
                            <p>Notes</p>
                        </div>
                        <p className='text-slate-500'>{notes}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TaskCard