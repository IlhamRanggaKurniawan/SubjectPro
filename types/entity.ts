export type Schedule = {
    Id: number,
    Day: string,
    StartTime: string,
    EndTime: string,
    SubjectId: number,
    CreatedAt: Date,
    UpdatedAt: Date
}

export type Task = {
    Id: number,
    Type: string,
    Note: string,
    Deadline: string,
    SubjectId: number,
    CreatedAt: Date,
    UpdatedAt: Date
}

export type Subject = {
    Id: number,
    Name: string,
    ClassId: number,
    Schedules: Schedule[]
    Tasks: Task[]
    CreatedAt: Date,
    UpdatedAt: Date
}

export type Class = {
    id: number,
    name: string,
    Students: null
    Subjects: Subject[]
    CreatedAt: Date,
    UpdatedAt: Date
}