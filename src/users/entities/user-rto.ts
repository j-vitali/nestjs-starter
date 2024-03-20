import { UserEntity } from "./user.entity";

// user-rto.ts
export class UserRTO {
  id: string;
  name: string;
  surname: string;
  fullname: string;
  nickname: string;
  status: string;
  avatar?: string | null;
  coverPicture?: string | null;
  bio?: string | null;
  followers: number;
  followingId: number;
  followersCommonTotal: number;
  followersCommon: any[];
  role?: string | null;
  urlWebsite?: string | null;
  urlFacebook?: string | null;
  urlInstagram?: string | null;
  urlTwitter?: string | null;
  invitedBy: object | null;
  industryType?: object | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(userEntity: UserEntity) {
    this.id = userEntity._id;
    this.fullname = userEntity.name + " " + userEntity.surname;
    this.name = userEntity.name;
    this.surname = userEntity.surname;
    this.nickname = userEntity.nickname;
    this.status = userEntity.status;
    this.avatar = userEntity.avatar;
    this.coverPicture = userEntity.coverPicture;
    this.bio = userEntity.bio;
    this.followers = userEntity.followers;
    this.followingId = userEntity.followingId;
    this.followersCommonTotal = userEntity.followersCommonTotal;
    this.followersCommon = userEntity.followersCommon;
    this.role = userEntity.role;
    this.urlWebsite = userEntity.urlWebsite;
    this.urlFacebook = userEntity.urlFacebook;
    this.urlInstagram = userEntity.urlInstagram;
    this.urlTwitter = userEntity.urlTwitter;
    this.invitedBy = this.invitedBy;
    this.createdAt = userEntity.createdAt;
    this.updatedAt = userEntity.updatedAt;
  }

  static fromEntity(userEntity: UserEntity): UserRTO {
    return new UserRTO(userEntity);
  }
}
