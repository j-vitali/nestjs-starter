import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Query } from "mongoose";
import { User, UserDocument } from "./users.schema";
import { UserEntity } from "./entities/user.entity";
import { UserRTO } from "./entities/user-rto";
import { FilterUserDto } from "./dto/query-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserRTO> {
    const createdUser = await this.userModel.create(createUserDto);
    return UserRTO.fromEntity(createdUser.toObject());
  }

  async findAll(
    filters: FilterUserDto = {},
    pagination?: { skip: number; limit: number },
  ): Promise<{ data: UserRTO[]; total: number }> {
    const { skip = 0, limit = 10 } = pagination || {};

    let query: Query<UserDocument[], UserDocument> = this.userModel.find({});

    // Apply filters from FilterUserDto
    if (filters.name) {
      query = query.where('name').equals(filters.name);
    }
    // Add more filters as needed

    // Populate the fields
    query = query.populate([
      { path: "invitedBy", select: "name surname nickname avatar role" },
      { path: "industryType", select: "value" },
    ]);

    const [users, total] = await Promise.all([
      query.skip(skip).limit(limit).exec(),
      this.userModel.countDocuments(filters),
    ]);

    // Convert each user document to a UserRTO object with populated fields included
    const userRTOs = users.map(user => new UserRTO(user.toObject()));

    return { data: userRTOs, total };
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

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserRTO> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return UserRTO.fromEntity(updatedUser.toObject());
  }

  async remove(id: string): Promise<UserEntity> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return deletedUser.toObject(); // Convert document to plain object
  }
}
