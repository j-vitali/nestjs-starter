import { PaginatedRequest } from "@core/interfaces/pagination.interface";
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

export class SortUserDto extends PaginatedRequest {
  @IsString()
  @IsOptional()
  createdAt?: string;

}
