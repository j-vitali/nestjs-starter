import { IsEmail, IsObject, IsOptional, IsString } from "class-validator";

export class CreateOrganizationDto {
    @IsString()
    @IsOptional()
    name: string;
  
    @IsString()
    status: string;
  
    @IsString()
    state: string;
  
    @IsString()
    description: string;
  
    @IsString()
    industryType: string;
  
    @IsString()
    websiteUrl: string;
  
    @IsEmail()
    contactEmail: string;
  
    @IsString()
    address: string;
  
    @IsString()
    numberOfEmployees: string;
  
    @IsString()
    @IsOptional()
    avatar: string;
  
    @IsString()
    @IsOptional()
    coverPicture: string;
  
    @IsObject()
    position: object;
  
    @IsObject()
    businessDetails: object;
  
    @IsObject()
    ownerDetails: object;
  }