import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Grade, GradeSchema } from './grade.schema';

@Schema()
export class Subject {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  teacher: string;

  @Prop({ type: [GradeSchema] })
  grades: Grade[];
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
