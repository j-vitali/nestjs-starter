import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { UsersModule } from "./users/users.module";
import { UsersController } from "./users/users.controller";
import { OrganizationsController } from "./organizations/organizations.controller";
import { OrganizationsModule } from "./organizations/organizations.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    UsersModule,
    OrganizationsModule,
  ],
  controllers: [UsersController, OrganizationsController],
  providers: [],
})
export class AppModule {}
