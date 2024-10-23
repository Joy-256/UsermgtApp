import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {

    @ApiProperty({
        description: 'The LAN ID of the user',
        example: 'balikujo',
      })
      @IsString()
      @IsOptional()
      lanId?: string;

    @ApiProperty({
      description: 'The phone number of the user',
      example: '077777777',
    })
    @IsString()
    @IsOptional()
    phoneNumber?: string;

    @ApiProperty(
      {
        description: 'The email of the user',
        example: 'joseph.balikuddembe@mtn.com',
      }
    )
    @IsString()
    @IsOptional()
    email?: string;

    @ApiProperty({
      description: 'The password of the user',
      example: 'password',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
  }

  