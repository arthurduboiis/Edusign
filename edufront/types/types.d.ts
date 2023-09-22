type CourseType = {
    id: number;
    name: string;
    room: number;
    startingDate: string;
    teacher: string;
    date: string;
    endingDate: string;
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