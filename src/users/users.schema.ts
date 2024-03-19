import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'Profiles',
  timestamps: true,
  id: true,
})
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  // Add more properties as needed
}

export const UserSchema = SchemaFactory.createForClass(User);
