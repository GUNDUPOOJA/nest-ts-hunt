import { Controller, Get, Render, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RegisterService } from './register.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('/register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Get('/')
  @Render('register')
  getRegister(@Res() res: Response) {
    return {
      title: 'Next.js Hunt App',
      message: 'Welcome to our collaborative web app!'
    }
  }

  @Post()
  public async register(
    @Res() res,
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<any> {
    try {
      await this.registerService.register(registerUserDto);

      return res.status(HttpStatus.OK).json({
        message: 'User registration successfully!',
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: User not registration!',
        status: 400,
      });
    }
  }


}