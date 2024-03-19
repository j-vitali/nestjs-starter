import { PaginatedRequest } from "@core/interfaces/response.interface";
import { IsOptional, IsString } from "class-validator";

export class FilterUserDto extends PaginatedRequest {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  surname?: string;

  @IsString()
  @IsOptional()
  nickname?: string;
}
