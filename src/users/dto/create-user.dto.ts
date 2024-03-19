import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;
  
    @IsString()
    surname: string;
  
    @IsString()
    nickname: string;
  
    @IsString()
    @IsOptional()
    bio: string;
  
    @IsString()
    @IsOptional()
    coverPicture: string;
  
    @IsString()
    @IsOptional()
    avatar: string;
  
    @IsString()
    @IsOptional()
    status: string;
  
    @IsString()
    @IsOptional()
    statusVerification: string;
  
    @IsString()
    @IsOptional()
    accountId: string;
  
    @IsString()
    @IsOptional()
    memberId: string;
  
    @IsString()
    @IsOptional()
    followers: number;
  
    @IsString()
    @IsOptional()
    followingId: number;
  
    @IsString()
    @IsOptional()
    role: string;
  
    @IsString()
    @IsOptional()
    urlWebsite: string;
  
    @IsString()
    @IsOptional()
    urlFacebook: string;
  
    @IsString()
    @IsOptional()
    urlInstagram: string;
  
    @IsString()
    @IsOptional()
    urlTwitter: string;
  }
  