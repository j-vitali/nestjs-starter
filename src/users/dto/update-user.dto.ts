import {
    IsOptional,
    IsString,
    IsNumber,
    IsNotEmpty,
    MinLength,
    MaxLength,
  } from "class-validator";
  
  export class UpdateUserDto {
    @IsString()
    @IsOptional()
    @MinLength(5)
    name: string;
  
    @IsString()
    @IsOptional()
    surname: string;
  
    @IsString()
    @IsOptional()
    @MinLength(5)
    @MaxLength(300)
    bio?: string;
  
    @IsString()
    @IsOptional()
    coverPicture?: string;
  
    @IsString()
    @IsOptional()
    avatar?: string;
  
    @IsString()
    @IsOptional()
    status?: string;
  
    @IsString()
    @IsOptional()
    statusVerification?: string;
  
    @IsString()
    @IsOptional()
    accountId?: string;
  
    @IsString()
    @IsOptional()
    memberId?: string;
  
    @IsNumber()
    @IsOptional()
    followers?: number;
  
    @IsNumber()
    @IsOptional()
    followingId?: number;
  
    @IsString()
    @IsOptional()
    role?: string;
  
    @IsString()
    @IsOptional()
    urlWebsite?: string;
  
    @IsString()
    @IsOptional()
    urlFacebook?: string;
  
    @IsString()
    @IsOptional()
    urlInstagram?: string;
  
    @IsString()
    @IsOptional()
    urlTwitter?: string;
  }
  