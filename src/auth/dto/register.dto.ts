import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'admin',
    description: '用户名，3-20 个字符',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  // @IsString()
  // @IsNotEmpty()
  // name: string;

  // 如果你还用邮箱，可以保留；否则删掉
  // @IsEmail()
  // email: string;

  @ApiProperty({
    example: '123456',
    description: '密码，至少 6 位',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
