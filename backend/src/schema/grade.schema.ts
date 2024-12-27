import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Grade {
  @Prop({ type: Number })
  grade: number;

  @Prop({ type: Number })
  expanded_grade: number;

  @Prop({ type: String })
  description: string;
}

export const GradeSchema = SchemaFactory.createForClass(Grade);
