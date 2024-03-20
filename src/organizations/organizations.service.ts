import { Injectable } from "@nestjs/common";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";
import { Organization, OrganizationDocument } from "./organization.schema";
import { Model, Query } from "mongoose";
import { OrganizationRTO } from "./entities/organization-rto";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<Organization>,
  ) {}

  async findAll(
    filters: any = {},
    sort: any = {},
    pagination: { skip: number; limit: number } = { skip: 0, limit: 10 },
  ): Promise<{ data: OrganizationRTO[]; total: number }> {
    const { skip, limit } = pagination;

    let query: Query<OrganizationDocument[], OrganizationDocument> = this.organizationModel.find();

    // Apply filters
    if (filters) {
      query = query.where(filters);
    }

    // Apply sorting
    if (sort) {
      query = query.sort(sort);
    }

    // Apply pagination
    query = query.skip(skip).limit(limit);

    // Execute query
    const organizations = await query.exec();

    // Get total count for pagination
    const total = await this.organizationModel.countDocuments(filters);

    // Convert documents to DTOs
    const organizationRTOs = organizations.map((org) => new OrganizationRTO(org.toObject()));

    return { data: organizationRTOs, total };
  }

  create(createOrganizationDto: CreateOrganizationDto) {
    return "This action adds a new organization";
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
