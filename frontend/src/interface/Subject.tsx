import {Grade} from "./Grade.tsx";
import {Remark} from "./Remark.tsx";

export interface Subject {
    name: string;
    teacher: string;
    grades: Grade[];
    remarks: Remark[];
}