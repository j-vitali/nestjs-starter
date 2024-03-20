export abstract class GenericMapper<Entity, Dto> {
  protected abstract mapEntityToDto(entity: Entity): Dto;

  entityToDto(entity: Entity): Dto {
    return this.mapEntityToDto(entity);
  }

  entityArrayToDtoArray(entityArray: Entity[]): Dto[] {
    return entityArray.map((entity) => this.mapEntityToDto(entity));
  }
}
