import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
}

@Post('signup')
signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto)
  {
  const {email, lanId,phoneNumber, password}=loginAuthDto;
  const identifier= email || lanId || phoneNumber;
  const result = await this.authService.login(identifier, password);
    return result;
  }
}


