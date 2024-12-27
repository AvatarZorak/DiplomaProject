import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Grade {
  @Prop({ type: Number })
  grade: number;

  @Prop({ type: Number })
  expandedGrade: number;

  @Prop({ type: String })
  description: string;
}

export const GradeSchema = SchemaFactory.createForClass(Grade);
