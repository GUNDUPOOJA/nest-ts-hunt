import { MaxLength, IsNotEmpty, IsEmail, IsString } from "class-validator";

export class ChangePasswordDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  readonly password: string;
}
