import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class RegisterUserDto {
  readonly id: number;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  password2: string;
}
