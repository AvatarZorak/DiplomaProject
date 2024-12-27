import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchoolYear, SchoolYearSchema } from './school-year.schema';

@Schema({ _id: false })
export class Student {
  @Prop({ type: Number })
  id: number;

  @Prop({ type: String })
  name: string;

  @Prop({ type: [SchoolYearSchema] })
  schoolYears: SchoolYear[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
