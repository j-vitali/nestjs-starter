import { OrganizationEntity } from "../entities/organization.entity";

// organization-rto.ts
export class OrganizationRTO {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  industryType: any | null;
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
  demoField: object | null;

  constructor(organizationEntity: OrganizationEntity) {
    this.id = organizationEntity._id;
    this.name = organizationEntity.name;
    this.industryType = organizationEntity.industryType;
    this.demoField = {
        name: 'demo name',
        value: 'demo value'
    };
    this.createdAt = organizationEntity.createdAt;
    this.updatedAt = organizationEntity.updatedAt;
  }

  static fromEntity(organizationEntity: OrganizationEntity): OrganizationRTO {
    return new OrganizationRTO(organizationEntity);
  }
}
