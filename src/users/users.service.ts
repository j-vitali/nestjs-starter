import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Query } from "mongoose";
import { User, UserDocument } from "./users.schema";
import { UserEntity } from "./entities/user.entity";
import { UserRTO } from "./rto/user-rto";
import { FilterUserDto } from "./dto/query-user.dto";
import { MongoQueryModel } from "nest-mongo-query-parser";

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

  async findAll(query: MongoQueryModel): Promise<{ data: UserRTO[]; resultCount: number; totalCount: number }> {
    // Find organizations based on query parameters
    const dbQuery = this.userModel
      .find(query.filter)
      .limit(query.limit)
      .skip(query.skip)
      .sort(query.sort)
      .select(query.select);

    const [organizations, totalCount] = await Promise.all([
      dbQuery.exec(),
      this.userModel.countDocuments(query.filter),
    ]);

    // Convert organizations to RTO
    const dataRTOs = organizations.map(item => new UserRTO(item.toObject()));

    return { data: dataRTOs, resultCount: organizations.length, totalCount };
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
