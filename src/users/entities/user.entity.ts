import { Types } from "mongoose";

export class UserEntity {
    _id!: Types.ObjectId;
    id!: string;
    invitedBy: object;
    name: string;
    surname: string;
    nickname: string;
    status: string;
    statusVerification: string;
    avatar: string;
    coverPicture: string;
    bio: string;
    accountId: string;
    memberId: string;
    followers: number;
    followingId: number;
    followersCommonTotal: number;
    followersCommon: any[];
    role: string;
    urlWebsite: string;
    urlFacebook: string;
    urlInstagram: string;
    urlTwitter: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type CreateUserEntity = Omit<UserEntity, 'id'>;
  export type UpdateUserEntity = Partial<Omit<UserEntity, 'id'>>;
  export type UserEntityFilters = Partial<UserEntity>;
  