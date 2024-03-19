import { Types } from 'mongoose';

export class UserEntity {
  _id!: Types.ObjectId;
  id!: string;
  invitedBy?: object | null;
  industryType?: object | null;
  name!: string;
  surname!: string;
  fullname: string;
  nickname!: string;
  status!: string;
  statusVerification?: string | null;
  avatar?: string | null;
  coverPicture?: string | null;
  bio?: string | null;
  accountId?: string | null;
  memberId?: string | null;
  followers!: number;
  followingId!: number;
  followersCommonTotal!: number;
  followersCommon!: any[];
  role?: string | null;
  urlWebsite?: string | null;
  urlFacebook?: string | null;
  urlInstagram?: string | null;
  urlTwitter?: string | null;
  createdAt!: Date;
  updatedAt!: Date;


  // Method to populate the invitedBy field
  populateInvitedBy(invitedByData: any): void {
    this.invitedBy = invitedByData; // Populate the invitedBy field
  }

  // Method to populate the industryType field
  populateIndustryType(industryTypeData: any): void {
    // Implement population logic for industryType
  }
}

export type CreateUserEntity = Omit<UserEntity, 'id'>;
export type UpdateUserEntity = Partial<Omit<UserEntity, 'id'>>;
export type UserEntityFilters = Partial<UserEntity>;
