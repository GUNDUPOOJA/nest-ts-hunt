import {  Controller,  Put,  Get,  Body,  Res,  Param,
  UseGuards,  HttpStatus,  NotFoundException,} from '@nestjs/common';
  import { AuthGuard } from "@nestjs/passport";
import { UserService } from './user.service';
import { UserProfileDto } from './dto/user-profile.dto';
import { IUser } from "./interfaces/user.interface";

@UseGuards(AuthGuard("jwt"))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/:userId/profile")
  public async getUser(@Res() res, @Param("userId") userId: number ): Promise<IUser> {
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new NotFoundException("User does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      user: user,
      status: 200,
    });
  }

  @Put("/:userId/profile")
  public async updateProfileUser(
    @Res() res,
    @Param('userId') userId: string, 
    @Body() userProfileDto: UserProfileDto
  ): Promise<any> {
    try {
      await this.userService.updateProfileUser(userId, userProfileDto);
      return res.status(HttpStatus.OK).json({
        message: "User updated successfully!",
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: "Error: User not updated!",
        status: 400,
      });
    }
  }

}