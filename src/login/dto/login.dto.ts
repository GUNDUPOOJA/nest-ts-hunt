import { ApiProperty}  from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, MaxLength, MinLength} from 'class-validator';

export class LoginDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  readonly password: string;
}
