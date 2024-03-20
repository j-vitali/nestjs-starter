import { PaginatedRequest } from "@core/interfaces/response.interface";
import { IsOptional, IsString, IsIn } from "class-validator";

export class FilterUserDto {
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

export class SortUserDto {
  @IsOptional()
  @IsString()
  @IsIn(["createdAt", "-createdAt"])
  sort?: string;
}
