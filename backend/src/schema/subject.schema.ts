import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Grade, GradeSchema } from './grade.schema';
import {Remark, RemarkSchema} from "./remark.schema";

@Schema({ _id: false })
export class Subject {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  teacher: string;

  @Prop({ type: [GradeSchema] })
  grades: Grade[];

  @Prop({ type: [RemarkSchema] })
  remarks: Remark[];
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
