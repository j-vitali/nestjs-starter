import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { PaginatedResponse } from '@core/interfaces';
import { FilterUserDto } from './dto/filter-user.dto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @InjectConnection() 
    private readonly connection: Connection,
    ) {}

    @Get('check')
    async checkDb() {
      try {
        // Access the MongoDB driver from the Mongoose connection
        const db = this.connection.db;
  
        // Execute a raw query to fetch all documents from the Profiles collection
        const profiles = await db.collection('Profiles').find({}).toArray();
  
        // Log the fetched documents to the console
        return profiles;
  
      } catch (error) {
        console.error('Error fetching profiles:', error);
        return { error: 'Failed to fetch profiles. Check the server logs for details. ' + error };
      }
    }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
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
