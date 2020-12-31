import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ForgotPasswordService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly mailerService: MailerService,
  ) {}


  public async forgotPassword(forgotPasswordDto: ForgotPasswordDto, ): Promise<any> {
    const userUpdate = await this.userRepository.findOne({
      email: forgotPasswordDto.email,
    });
    const passwordRand = Math.random()
      .toString(36)
      .slice(-8);
    userUpdate.password = bcrypt.hashSync(passwordRand, 8);
    this.sendMailForgotPassword(userUpdate.email, passwordRand);
    return await this.userRepository.save(userUpdate);
  }
  

  private sendMailForgotPassword(email, password): void {
    this.mailerService
      .sendMail({
        to: email,
        from: 'dcase@nwmissouri.edu',
        subject: 'Forgot password successful',
        text: 'Forgot password successful!',
        template: 'index',
        context: {
          title: 'Forgot password successful!',
          description:
            'Request Reset Password Successfully!  ✔, This is your new password: ' +
            password,
        },
      })
      .then(response => {
        console.log(response);
        console.log('Forgot Password: Send Mail successfully!');
      })
      .catch(err => {
        console.log(err);
        console.log('Forgot Password: Send Mail Failed!');
      });
  }
}

