export class OrganizationEntity {
    _id: string;
    id: string;
    name: string;
    description: string;
    websiteUrl: string;
    industryType: string;
    state: string;
    status: string;
    address: string;
    numberOfEmployees: string;
    position: object;
    avatar: string;
    coverPicture: string;
    contactEmail: string;
    ownerDetails: object;
    businessDetails: object;
    statusChangedAt: Date;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type CreateOrganizationEntity = Omit<OrganizationEntity, 'id'>;
  export type UpdateOrganizationEntity = Partial<Omit<OrganizationEntity, 'id'>>;
  export type OrganizationEntityFilters = Partial<OrganizationEntity>;
  