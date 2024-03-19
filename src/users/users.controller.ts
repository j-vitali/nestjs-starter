import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UserDto } from './dto/user.dto';
import { PaginatedResponse } from '@core/interfaces';
import { UserEntity } from './entities/user.entity';
import { LogMethod } from '@common/utils/logger';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    ) {}

    
  @Post()
  @LogMethod()
  async create(
      @Body() createUserDto: CreateUserDto,
    ): Promise<UserDto> {
      const createdUser = await this.usersService.create({
        ...createUserDto,
        _id: new ObjectId,
        invitedBy: undefined,
        followersCommonTotal: 0,
        followersCommon: [],
        createdAt: undefined,
        updatedAt: undefined
      });
      console.log('createdUser', createdUser);
      return createdUser;
  }


  @Get()
  async findAll(@Query() query: FilterUserDto): 
  Promise<PaginatedResponse<UserEntity>> {
    const { limit = 20, page = 1, ...filters } = query;

    // Call service method with filters and pagination options
    const data = await this.usersService.findAll(filters, { skip: (page - 1) * limit, limit });
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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
