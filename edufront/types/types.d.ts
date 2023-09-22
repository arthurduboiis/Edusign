type CourseType = {
    id: number;
    name: string;
    room: number;
    startingDate: string;
    teacher: string;
    date: string;
    endingDate: string;
    description: string;
    studentsIds: number[];
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
    lastName: string,
    password: string,
    email: string,
    course_id: number
}

type UserContextType = {
    currentUser: StudentType | AdminType | null;
    setCurrentUser: (user: StudentType | AdminType | null) => void;
}

export type { CourseType, AdminType, StudentType, UserContextType };