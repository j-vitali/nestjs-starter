import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrganizationDocument = HydratedDocument<Organization>;

@Schema()
export class Organization {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  websiteUrl: string;

  @Prop({ required: false })
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

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
