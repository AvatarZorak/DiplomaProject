import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Subject, SubjectSchema } from './subject.schema';

@Schema()
export class SchoolYear {
  @Prop({ type: Number })
  year: number;

  @Prop({ type: [SubjectSchema] })
  subjects: Subject[];
}

export const SchoolYearSchema = SchemaFactory.createForClass(SchoolYear);
