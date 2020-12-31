import { ConfigModule } from '@nestjs/config';
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";

import { JwtStrategy } from "./strategies/jwt.strategy";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";
import { UserEntity } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({ defaultStrategy: "jwt", session: false }),
    JwtModule.register({
      secret: process.env.SECRET_KEY_JWT,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  providers: [LoginService, UserService, JwtStrategy],
  controllers: [LoginController],
})
export class LoginModule {}