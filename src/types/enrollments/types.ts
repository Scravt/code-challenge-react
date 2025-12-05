export interface Enrollment {
    id: string;
    student_name: string;
    email: string;
    workshop: string;
    status: string;
    created_at: string;
}

export type EnrollmentList = Enrollment[];
