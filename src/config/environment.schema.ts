// import { BaseEnvironmentSchema } from '<private-package>'
// import { IsDefined, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

// export class EnvironmentSchema extends BaseEnvironmentSchema {
//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   WEB_URL: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   AUTH_API: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   ORDER_API: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   PAYMENT_API: string

//   @IsDefined()
//   @IsEmail()
//   CUSTOMER_SUPPORT_EMAIL: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   CUSTOMER_SUPPORT_PHONE: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   CUSTOMER_SUPPORT_INTERNAL_EMAIL: string

//   @IsString()
//   @IsOptional()
//   @IsString()
//   ML_FOODGRADE_GLOBAL_SENDGRID_KEY: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   USER_REGISTRATION_TEMPLATE_ID: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   UNLOCK_ACCOUNT_TEMPLATE_ID: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   LOCK_ACCOUNT_TEMPLATE_ID: string

//   @IsDefined()
//   @IsString()
//   @IsNotEmpty()
//   WELCOME_NEW_REGISTRATION_TEMPLATE_ID: string

//   get SENDGRID_KEY() {
//     return this.getDynamicPropertyValue('SENDGRID_KEY')
//   }
// }