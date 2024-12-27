import { Document } from 'mongoose';
import { ISchoolYear } from './school_year.interface';

export interface IStudent extends Document {
  name: string;
  school_years: ISchoolYear[];
}
