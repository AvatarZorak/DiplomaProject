import { IGrade } from './grade.interface';
import {IRemark} from "./remark.interface";

export interface ISubject {
  name: string;
  teacher: string;
  grades: IGrade[];
  remarks: IRemark[];
}
