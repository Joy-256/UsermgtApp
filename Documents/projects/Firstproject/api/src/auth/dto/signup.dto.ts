import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {

    @ApiProperty({
        description: 'The LAN ID of the user',
        example: 'balikujo',
      })
      @IsString()
      @IsOptional()
      lanId?: string;

    
    @ApiProperty(
      {
        description: 'The email of the user',
        example: 'joseph.balikuddembe@mtn.com',
      }
    )
    @IsString()
    @IsOptional()
    email?: string;

}
  