import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from './organization.schema';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { MongoQueryModel, MongoQueryParser } from 'nest-mongo-query-parser';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<OrganizationDocument>,
  ) {}

  async findAll(query: MongoQueryModel) {
    const queryModel = this.organizationModel
      .find(query.filter)
      .limit(query.limit)
      .skip(query.skip)
      .sort(query.sort)
      .select(query.select);

    const data = await queryModel.exec();

    // Calculate pagination values
    const currentPage = Math.floor(query.skip / query.limit) + 1;
    const totalPages = Math.ceil(await this.organizationModel.countDocuments(query.filter) / query.limit);

    // Return data array and pagination schema
    return {
      data: data,
      pagination: {
        currentPage: currentPage,
        totalPages: totalPages,
        totalRecords: data.length,
      },
    };
  }

  create(createOrganizationDto: CreateOrganizationDto) {
    // Implement create method logic
  }

  findOne(id: number) {
    // Implement findOne method logic
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    // Implement update method logic
  }

  remove(id: number) {
    // Implement remove method logic
  }
}
