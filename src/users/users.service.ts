import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserEntity, UserEntity } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { classToPlain, plainToClass, plainToInstance } from 'class-transformer';
import { LogMethod } from '@common/utils/logger';



@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}


  @LogMethod()
  async create(
    createUserDto: CreateUserDto,
  ) {
    console.log('createUserDto', createUserDto);
    // Add here custom logic
    const createdUser = await this.userModel.create(createUserDto);

    return createdUser;
  }



  // Get all 
  async findAll(
    filters: any = {}, 
    pagination?: { skip: number; limit: number }):
    Promise<{ data: UserDocument[]; total: number }> {
    const { skip, limit } = pagination || {};
    
    console.log('filters-service', filters);

    const query = this.userModel.find(filters);

    if (pagination) {
      query.skip(skip).limit(limit);
    }

    const users = await query.exec();
    const total = await this.userModel.countDocuments(filters);

    return { data: users, total };
  }

  async findOne(id: string): Promise<UserDocument> {
    // Add here custom logic
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<any> {
    const document = await this.userModel.findByIdAndDelete(id).exec();
    if (!document) {
      return null;
    }
    return document;
  }

  // Function to check if ID exists
  private async _throwIfNotExists(id: string): Promise<void> {
    try {
      const obj = await this.userModel.findById(id).exec();

      if (!obj || obj.$isDeleted) {
        throw new Error(`Object with id ${id} does not exist or is deleted!`);
      }
    } catch (error) {
      throw new Error(`Error while checking object existence: ${error.message}`);
    }
  }
}
