import {Grade} from "./Grade.tsx";

export interface Subject {
    name: string;
    teacher: string;
    grades: Grade[]
}