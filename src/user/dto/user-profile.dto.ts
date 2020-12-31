import { ApiProperty}  from '@nestjs/swagger';
import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class UserProfileDto {
 
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}