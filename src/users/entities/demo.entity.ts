// import { type Category } from '@libs/entities/category'
// import { type Product } from '@libs/entities/product'

// import { AttributeRto } from '@product-api/attribute/rto'

// import { ProductConfigurationRto } from '../../product-configuration'

// import { AttachmentRto } from './attachment.rto'
// import { BaseProductRto } from './base-product.rto'
// import { ProductAddonRto } from './product-addon.rto'
// import { ProductCategoryRto } from './product-category.rto'

// function flattenCategory(accumulator: Category[], category: Category): Category[] {
//   if (!category.parent) {
//     return [category, ...accumulator]
//   }

//   return flattenCategory([category, ...accumulator], category.parent)
// }

// export class ProductRto extends BaseProductRto {
//   public static fromEntityArray(entities: Product[]) {
//     return entities.map((entity) => this.fromEntity(entity))
//   }

//   public static fromEntity(entity: Product): ProductRto {
//     const addonsRto = entity.productAddonTypes?.flatMap((productAddonType) => {
//       const { addonType, addons = [] } = productAddonType
//       const nonDeletedAddons = addons.filter((addon) => addon.product)
//       return ProductAddonRto.fromEntityArray(nonDeletedAddons, entity, addonType)
//     })

//     const attributesRto = entity.attributes && AttributeRto.fromEntityArray(entity.attributes)

//     const flattenedCategories = (entity.categories || []).reduce(
//       (accumulator, category) => flattenCategory(accumulator, category),
//       [],
//     )
//     const categories = ProductCategoryRto.fromEntityArray(flattenedCategories)
//     const configurations = ProductConfigurationRto.fromEntityArray(entity.configurations)
//     const attachments = AttachmentRto.fromEntityArray(entity.attachments ?? [])

//     /**
//      * NOTE: The raw data for `featuresAndBenefits` is coming from data dumps that include the bullet character.
//      * Our frontend team prefers to split the string on the bullet character and then trim the resulting strings.
//      * This is ported over from the old misvc logic.
//      *
//      * @see https://github.com/motion-it/micom/blob/4865af7883796dd6fd58c0efed3e5ad5c66f26f3/svc/src/main/java/com/motion/mi/search/bo/GroupBySearchBO.java#L2866
//      */
//     const featuresAndBenefits = entity.featuresAndBenefits
//       ?.split('\u2022')
//       ?.map((item) => item.trim())

//     return new this({
//       addons: addonsRto,
//       attachments,
//       attributes: attributesRto,
//       brand: entity.brand,
//       categories,
//       configurations,
//       description: entity.description,
//       featuresAndBenefits,
//       id: entity.id,
//       itemId: entity.itemId,
//       manufacturerName: entity.manufacturer?.name ?? entity.manufacturerName,
//       allowedStates: entity.manufacturer?.allowedStates ?? [],
//       manufacturerPartNumber: entity.manufacturerPartNumber,
//       manufacturerDescription: entity.manufacturerDescription,
//       minimumPurchaseQuantity: entity.minimumPurchaseQuantity,
//       name: entity.name,
//       price: entity.price,
//       availableQuantity: entity.availableQuantity,
//       uom: entity.uom,
//     })
//   }

//   public addons?: ProductAddonRto[]
//   public attachments?: AttachmentRto[]
//   public attributes?: AttributeRto[]
//   public allowedStates: string[]

//   private constructor(data: ProductRto) {
//     const { addons, attributes, ...rest } = data
//     super(rest)

//     Object.assign(this, { addons, attributes })
//   }
// }
