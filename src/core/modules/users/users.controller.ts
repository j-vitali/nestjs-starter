import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

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
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
