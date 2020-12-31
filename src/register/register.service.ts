import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { IUser } from './../user/interfaces/user.interface';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from '../user/user.service';


@Injectable()
export class RegisterService {

  constructor(
    private readonly userService: UserService,
    private readonly mailerService: MailerService
  ) {}

  public async register(registerUserDto: RegisterUserDto): Promise<IUser> {
    registerUserDto.password = bcrypt.hashSync(registerUserDto.password, 8);
    this.sendMailRegisterUser(registerUserDto);
    return this.userService.create(registerUserDto);
  }


  private sendMailRegisterUser(user): void {
    this.mailerService
      .sendMail({
        to: user.email,
        from: 'dcase@nwmissouri.edu',
        subject: 'Registration successful ✔',
        text: 'Registration successful!',
        template: 'index',
        context: {
          title: 'Registration successful',
          description:
            "You did it! You're now successfully registered.✔",
          nameUser: user.name,
        },
      })
      .then(response => {
        console.log(response);
        console.log('User Registration: Sent Mail successfully!');
      })
      .catch(err => {
        console.log(err);
        console.log('User Registration: Sent Mail Failed!');
      });
  }


}
