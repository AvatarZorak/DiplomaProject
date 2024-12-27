import { Document } from 'mongoose';
import { ISchoolYear } from './school-year.interface';

export interface IStudent extends Document {
  id: number;
  name: string;
  schoolYears: ISchoolYear[];
}
