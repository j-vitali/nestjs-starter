import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { FilterUserDto } from "./dto/query-user.dto";
import { LogMethod } from "@core/decorators/logger";
import { UserRTO } from "./rto/user-rto";
import { MongoQuery, MongoQueryModel } from "nest-mongo-query-parser";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserRTO> {
    const createdUser = await this.usersService.create(createUserDto);
    return createdUser;
  }

  @Get()
  async findAll(
    @MongoQuery() query: MongoQueryModel,
  ): Promise<{
    data: UserRTO[];
    pagination: { currentPage: number; totalPages: number; resultCount: number; totalCount: number };
  }> {
    const { data, resultCount, totalCount: totalCount } = await this.usersService.findAll(query);

    // Calculate pagination values
    const currentPage = Math.floor(query.skip / query.limit) + 1;
    const totalPages = Math.ceil(totalCount / query.limit ?? 100);
    // Return data array and pagination schema
    return {
      data: data,
      pagination: {
        currentPage: 1 || currentPage,
        totalPages: totalPages,
        totalCount,
        resultCount,
      },
    };
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<UserRTO> {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
