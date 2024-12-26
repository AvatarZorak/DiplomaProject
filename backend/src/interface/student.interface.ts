import { Document } from 'mongoose';

export interface IStudent extends Document {
  readonly name: string;
  readonly grades: number[];
}
