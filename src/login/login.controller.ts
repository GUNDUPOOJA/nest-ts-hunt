import { Controller, Get, Render, Res, Post, Body } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';
import { LoginDto } from '../login/dto/login.dto';

@Controller('/login')
export class LoginController {

  constructor(private readonly loginService: LoginService) {}


  @Get('/')
  @Render('login')
  getLogin(@Res() res: Response) {
    return {
      title: 'Next.js Hunt App',
      message: 'Welcome to our collaborative web app!'
    }
  }


  @Post()
  public async login(@Body() loginDto: LoginDto): Promise<any> {
    return await this.loginService.login(loginDto);
  }
}