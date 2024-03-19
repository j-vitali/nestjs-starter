export class UserDto {
    id: string;
    invitedBy: null | object;
    name: string;
    surname: string;
    fullname: string;
    nickname: string;
    bio: string;
    coverPicture: string;
    avatar: string;
    status: string;
    statusVerification: string;
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