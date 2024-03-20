import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({
  collection: "Profiles",
  timestamps: true,
  id: true
})
export class User extends Document {
  @Prop({ required: true })
  name: string;

  // Population
  @Prop({ required: false, type: Types.ObjectId, ref: User.name })
  invitedBy: Types.ObjectId;

  // Population from another collection (IndustryTypes)
  @Prop({ required: false, type: Types.ObjectId, ref: "IndustryType" })
  industryType: Types.ObjectId;

  @Prop({ required: true })
  surname: string;

  @Prop({ required: true })
  nickname: string;

  @Prop({ required: false })
  bio: string;

  @Prop({ required: false })
  coverPicture: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: false, default: "pending" })
  statusVerification: string;

  @Prop({ required: false, type: Number })
  followers: number;

  @Prop({ required: false, type: Number })
  followingId: number;

  @Prop({ required: false, type: Number })
  followersCommonTotal: number;

  @Prop({ required: false, type: Array })
  followersCommon: Array<any>;

  @Prop({ required: false, type: Types.ObjectId })
  memberId: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: false })
  avatar: string;

  @Prop({ required: false })
  accountId: string;

  @Prop({ required: false })
  urlWebsite: string;

  @Prop({ required: false })
  urlInstagram: string;

  @Prop({ required: false })
  urlFacebook: string;

  @Prop({ required: false })
  urlTwitter: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
