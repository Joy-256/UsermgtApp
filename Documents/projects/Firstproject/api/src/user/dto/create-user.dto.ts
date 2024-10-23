import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { UserRole } from 'user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
      description: 'The first name of the user',
      example: 'Joy',
    })
    @IsString()
    @IsOptional()
    firstName: string;
    
    @ApiProperty({
      description: 'The last name of the user',
      example: 'Kabs',
    })
    @IsString()
    @IsOptional()
    lastName: string;

    @ApiProperty({
        description: 'The LAN ID of the user',
        example: 'balikujo',
      })
      @IsString()
      @IsNotEmpty()
      lanId: string;

    @ApiProperty({
      description: 'The phone number of the user',
      example: '077777777',
    })
    @IsString()
    @IsOptional()
    phoneNumber: string;




    @ApiProperty(
      {
        description: 'The email of the user',
        example: 'joseph.balikuddembe@mtn.com',
      }
    )
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty(
      {
        description: 'The role of the user',
        example: 'APPROVER',
      }
    )
    @IsNotEmpty()
    role: UserRole;

    @ApiProperty({
      description: 'The password of the user',
      example: 'password',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
  }


