import { Module } from "@nestjs/common";
import { ChangePasswordController } from "./change-password.controller";
import { ChangePasswordService } from "./change-password.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ChangePasswordController],
  providers: [ChangePasswordService, UserService],
})
export class ChangePasswordModule {}