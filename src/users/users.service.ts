import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./users.schema";
import { UserEntity } from "./entities/user.entity"; 
import { UserRTO } from "./entities/user-rto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserRTO> {
    // Return UserEntity
    const createdUser = await this.userModel.create(createUserDto);
    console.log("create-service", createUserDto);
    return UserRTO.fromEntity(createdUser.toObject()); 
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


    return { data: [], total };
  }

  
  async findOne(id: string): Promise<UserRTO> {
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

    // Populate the UserRTO with the populated fields
    const userRTO = new UserRTO(user.toObject());

    return userRTO;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return updatedUser.toObject();
  }

  async remove(id: string): Promise<UserEntity> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return deletedUser.toObject(); // Convert document to plain object
  }
}
