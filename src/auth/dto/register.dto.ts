import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  // @IsString()
  // @IsNotEmpty()
  // name: string;

  // 如果你还用邮箱，可以保留；否则删掉
  // @IsEmail()
  // email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
