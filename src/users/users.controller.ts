import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { FilterUserDto } from "./dto/query-user.dto";
import { PaginatedResponse } from "@core/interfaces";
import { UserEntity } from "./entities/user.entity";
import { LogMethod } from "@core/decorators/logger";
import { UserRTO } from "./entities/user-rto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserRTO> {
    const createdUser = await this.usersService.create(createUserDto);
    return createdUser;
  }

  @Get()
  async findAll(@Query() query: FilterUserDto) {
    const { limit = 20, page = 1, ...filters } = query;

    // Call service method with filters and pagination options
    const data = await this.usersService.findAll(filters, {
      skip: (page - 1) * limit,
      limit,
    });
    // Calculate total pages
    const totalPages = Math.ceil(data.total / limit);

    return {
      data: data.data,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalRecords: data.total,
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
