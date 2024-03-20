import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
    collection: "Organizations",
    timestamps: true,
    id: true
  })
export class Organization extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  websiteUrl: string;

  @Prop({ required: false, type: Types.ObjectId, ref: "IndustryType" })
  industryType: string;

  @Prop({ required: false })
  state: string;

  @Prop({ required: false })
  status: string;

  @Prop({ required: false })
  address: string;

  @Prop({ required: false })
  numberOfEmployees: string;

  @Prop({ required: false })
  contactEmail: string;

  @Prop({ required: false, type: Object })
  position: object;

  @Prop({ required: false })
  avatar: string;

  @Prop({ required: false })
  coverPicture: string;

  @Prop({ required: false, type: Object })
  ownerDetails: object;

  @Prop({ required: false, type: Object })
  businessDetails: object;

  @Prop({ required: false, type: Date })
  statusChangedAt: Date;

  @Prop({ required: false, type: Date })
  createdAt: Date;

  @Prop({ required: false, type: Date })
  updatedAt: Date;
}

export type OrganizationDocument = Organization & Document;

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
