import { Controller, Get, Res, Render, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get('/')
  @Render('index')
  getHello(@Res() res: Response) {
    return {
      title: 'Next.js Hunt App',
      message: 'Welcome to our collaborative web app!'
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/secure')
  getProtectedResource(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.appService.getSecureResource());
  }

}