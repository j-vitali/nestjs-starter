import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from '@modules/organizations/organizations.module';
import { OrganizationsController } from '@modules/organizations/organizations.controller';
import { OrganizationsService } from '@modules/organizations/organizations.service';
import { UsersModule } from './core/modules/users/users.module';
import { UsersService } from '@modules/users/users.service';
import { UsersController } from '@modules/users/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        uri: process.env.MONGO_URI,
      }),
    }),
    OrganizationsModule,
    UsersModule,
  ],
  controllers: [
    AppController, 
    UsersController, 
    OrganizationsController
  ],
  providers: [AppService, UsersService, OrganizationsService]
})
export class AppModule {}
