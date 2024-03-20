import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { OrganizationsService } from "./organizations.service";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { UpdateOrganizationDto } from "./dto/update-organization.dto";
import { MongoQuery, MongoQueryModel } from "nest-mongo-query-parser";

@Controller("organizations")
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Get()
  findAll(@MongoQuery() query: MongoQueryModel) {
    const organizations = this.organizationsService.findAll(query);
    return organizations;
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
