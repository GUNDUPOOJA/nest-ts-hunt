import { Controller, Get, Render, Res, Post, Body, HttpStatus } from "@nestjs/common";
import { Response } from 'express';
import { ForgotPasswordService } from './forgot-password.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';

@Controller('/forgot-password')
export class ForgotPasswordController {

  constructor(private readonly forgotPasswordService: ForgotPasswordService) {}

  @Get('/')
  @Render('forgotPassword')
  getForgotPassword(@Res() res: Response) {
    return {
      title: 'Next.js Hunt App',
      message: 'Welcome to our collaborative web app!'
    }
  }



  @Post()
  public async forgotPassword(
    @Res() res,
    @Body() forgotPasswordDto: ForgotPasswordDto
  ): Promise<any> {
    try {
      await this.forgotPasswordService.forgotPassword(forgotPasswordDto);

      return res.status(HttpStatus.OK).json({
        message: "Request Reset Password Successfully!",
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: "Error: Forgot password failed!",
        status: 400,
      });
    }
  }
}
  