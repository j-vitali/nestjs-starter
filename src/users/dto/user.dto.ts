export class UserDto {
    id: string;
    invitedBy: string;
    name: string;
    surname: string;
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
    role: string | null;
    urlWebsite: string;
    urlFacebook: string;
    urlInstagram: string;
    urlTwitter: string;
  }