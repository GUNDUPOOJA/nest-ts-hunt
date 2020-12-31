import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { ForgotPasswordService } from './forgot-password.service';
import { ForgotPasswordController } from './forgot-password.controller';
import { UserEntity } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService, UserService]
})
export class ForgotPasswordModule {}
