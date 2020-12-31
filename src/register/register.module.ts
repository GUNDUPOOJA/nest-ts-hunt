import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { UserService } from "../user/user.service";
import { UserEntity } from "../user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [RegisterController],
  providers: [RegisterService, UserService]
})
export class RegisterModule {}
