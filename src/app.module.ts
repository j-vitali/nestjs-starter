import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OrganizationsModule } from "./organizations/organizations.module";
import { OrganizationsController } from "./organizations/organizations.controller";
import { OrganizationsService } from "./organizations/organizations.service";
import { UsersModule } from "./users/users.module";
import { UsersService } from "./users/users.service";
import { UsersController } from "./users/users.controller";
import { CoreModule } from "@core/core.module";
import UserMapper from "./users/users.mapper";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        uri: process.env.MONGO_URI,
      }),
    }),
    CoreModule,
    OrganizationsModule,
    UsersModule,
  ],
  controllers: [AppController, UsersController, OrganizationsController],
  providers: [AppService, UsersService, OrganizationsService, UserMapper],
})
export class AppModule {}
