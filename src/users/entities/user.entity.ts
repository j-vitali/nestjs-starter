import { Types } from "mongoose";

export class UserEntity {
  _id!: Types.ObjectId;
  id!: Types.ObjectId;
  invitedBy: object | null;
  name: string;
  surname: string;
  nickname: string;
  status: string;
  statusVerification: string | null;
  avatar: string | null;
  coverPicture: string | null;
  bio: string | null;
  accountId: string | null;
  memberId: string | null;
  followers: number | 0;
  followingId: number | 0;
  followersCommonTotal: number;
  followersCommon: any[];
  role: string | null;
  urlWebsite: string | null;
  urlFacebook: string | null;
  urlInstagram: string | null;
  urlTwitter: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserEntity = Omit<UserEntity, "id">;
export type UpdateUserEntity = Partial<Omit<UserEntity, "id">>;
export type UserEntityFilters = Partial<UserEntity>;
