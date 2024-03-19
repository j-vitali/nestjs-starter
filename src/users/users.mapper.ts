import { Injectable } from '@nestjs/common';
import { UserDocument } from './users.schema';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserMapper {
  mapDocumentToEntity(userDocument: UserDocument): UserEntity {
    const userEntity = new UserEntity();
    userEntity.id = userDocument._id;
    userEntity.name = userDocument.name;
    userEntity.surname = userDocument.surname;
    userEntity.nickname = userDocument.nickname;
    userEntity.status = userDocument.status;
    userEntity.statusVerification = userDocument.statusVerification;
    userEntity.avatar = userDocument.avatar;
    userEntity.coverPicture = userDocument.coverPicture;
    userEntity.bio = userDocument.bio;
    userEntity.accountId = userDocument.accountId;
    userEntity.memberId = userDocument.memberId;
    userEntity.followers = userDocument.followers;
    userEntity.followingId = userDocument.followingId;
    userEntity.followersCommonTotal = userDocument.followersCommonTotal;
    userEntity.followersCommon = userDocument.followersCommon;
    userEntity.role = userDocument.role;
    userEntity.urlWebsite = userDocument.urlWebsite;
    userEntity.urlFacebook = userDocument.urlFacebook;
    userEntity.urlInstagram = userDocument.urlInstagram;
    userEntity.urlTwitter = userDocument.urlTwitter;
    userEntity.invitedBy = userDocument.invitedBy;
    userEntity.industryType = userDocument.industryType;

    return userEntity;
  }
}
export default UserMapper; // Export the class as default if needed
