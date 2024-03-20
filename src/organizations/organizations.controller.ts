import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { OrganizationsService } from "./organizations.service";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";
import { MongoQuery, MongoQueryModel } from "nest-mongo-query-parser";
import { OrganizationRTO } from "./rto/organization-rto";
import { ConfigModule } from "@nestjs/config";

@Controller("organizations")
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Get()
  async findAll(
    @MongoQuery() query: MongoQueryModel,
  ): Promise<{
    data: OrganizationRTO[];
    pagination: { currentPage: number; totalPages: number; resultCount: number; totalCount: number };
  }> {
    const { data, resultCount, totalCount: totalCount } = await this.organizationsService.findAll(query);

    // Calculate pagination values
    const currentPage = Math.floor(query.skip / query.limit) + 1;
    const totalPages = Math.ceil(totalCount / query.limit ?? 100);
    // Return data array and pagination schema
    return {
      data: data,
      pagination: {
        currentPage: 1 || currentPage,
        totalPages: totalPages,
        totalCount,
        resultCount,
      },
    };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.organizationsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationsService.update(+id, updateOrganizationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.organizationsService.remove(+id);
  }
}
