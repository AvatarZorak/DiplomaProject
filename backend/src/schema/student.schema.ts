import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchoolYear, SchoolYearSchema } from './school-year.schema';

@Schema()
export class Student {
  @Prop({ type: String })
  name: string;

  @Prop({ type: [SchoolYearSchema] })
  school_years: SchoolYear[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
