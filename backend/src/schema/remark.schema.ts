import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Remark {
    @Prop({ type: String })
    description: string;
}

export const RemarkSchema = SchemaFactory.createForClass(Remark);