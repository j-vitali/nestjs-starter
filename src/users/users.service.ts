import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./users.schema";
import { UserEntity } from "./entities/user.entity"; 
import { UserMapper } from "./users.mapper";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly userMapper: UserMapper,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    // Return UserEntity
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser.toObject(); 
  }

  async findAll(
    filters: any = {},
    pagination?: { skip: number; limit: number },
  ): Promise<{ data: UserEntity[]; total: number }> {
    const { skip, limit } = pagination || {};
    const query = this.userModel.find(filters);

    if (pagination) {
      query.skip(skip).limit(limit);
    }

    const users = await query.exec();
    const total = await this.userModel.countDocuments(filters);

    // Map the array of users to an array of UserEntity using the UserMapper
    const mappedUsers = users.map(user => this.userMapper.mapDocumentToEntity(user));

    return { data: mappedUsers, total };
  }

  
  async findOne(id: string): Promise<UserEntity> {
    const user = await this.userModel
      .findById(id)
      .populate([
        { path: "invitedBy", select: "name surname nickname avatar role" },
        { path: "industryType", select: "value" },
      ])
      .exec();

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return this.userMapper.mapDocumentToEntity(user); // Convert document to plain object
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return updatedUser.toObject(); // Convert document to plain object
  }

  async remove(id: string): Promise<UserEntity> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return deletedUser.toObject(); // Convert document to plain object
  }
}
