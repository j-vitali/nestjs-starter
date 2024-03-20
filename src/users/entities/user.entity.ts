import { Types } from 'mongoose';

export class UserEntity {
  _id: string;
  invitedBy: { nickname: string | null, name: string | null };
  industryType?: object | null;
  name?: string;
  surname?: string;
  fullname: string;
  nickname?: string;
  status?: string;
  statusVerification?: string | null;
  avatar?: string | null;
  coverPicture?: string | null;
  bio?: string | null;
  accountId?: string | null;
  memberId?: string | null;
  followers?: number;
  followingId?: number;
  followersCommonTotal?: number;
  followersCommon?: any[];
  role?: string | null;
  urlWebsite?: string | null;
  urlFacebook?: string | null;
  urlInstagram?: string | null;
  urlTwitter?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateUserEntity = UserEntity;
export type UpdateUserEntity = UserEntity;
export type UserEntityFilters = UserEntity;
