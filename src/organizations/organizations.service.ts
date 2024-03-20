import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from './organization.schema';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { MongoQueryModel, MongoQueryParser } from 'nest-mongo-query-parser';
import { OrganizationRTO } from './rto/organization-rto';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<OrganizationDocument>,
  ) {}

  async findAll(query: MongoQueryModel): Promise<{ data: OrganizationRTO[]; resultCount: number; totalCount: number }> {
    // Find organizations based on query parameters
    const organizationsQuery = this.organizationModel
      .find(query.filter)
      .limit(query.limit)
      .skip(query.skip)
      .sort(query.sort)
      .select(query.select);

    const [organizations, totalCount] = await Promise.all([
      organizationsQuery.exec(),
      this.organizationModel.countDocuments(query.filter),
    ]);

    // Convert organizations to RTO
    const dataRTOs = organizations.map(item => new OrganizationRTO(item.toObject()));

    return { data: dataRTOs, resultCount: organizations.length, totalCount };
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
