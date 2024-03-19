import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({
  collection: "IndustryTypes",
  timestamps: true,
  id: true,
})
export class IndustryType extends Document {
  @Prop({ required: true })
  value: string;
}

export type IndustryTypeDocument = IndustryType & Document;

export const IndustryTypeSchema = SchemaFactory.createForClass(IndustryType);
