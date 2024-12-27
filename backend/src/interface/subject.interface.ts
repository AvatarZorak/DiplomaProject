import { IGrade } from './grade.interface';

export interface ISubject {
  name: string;
  teacher: string;
  grades: IGrade[];
}
