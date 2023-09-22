type CourseType = {
    id: number;
    name: string;
    room: number;
    hourStart: string;
    teacher: string;
    date: string;
    hourEnd: string;
    description: string;
}

type StudentType = {
    name: string;
    lastName: string;
    password: string;
    email: string;
    id: number;
}

type AdminType = {
    id: string,
    name: string,
    lastname: string,
    course_id: number
}

export type { CourseType, AdminType, StudentType };