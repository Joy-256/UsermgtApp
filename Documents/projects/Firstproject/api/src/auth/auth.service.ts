import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService

  ) {}
  async signup(data: any) {
    Logger.log(data)
    const hashedPassword = await this.hashPassword(data.password);
    data.password = hashedPassword
    const user = await this.userService.create(data); 
    delete  user.password
    return user
  }

  async login(identifier: string, password: string) {
    
      const user = await this.userService.findPasswordByEmailLANIDorPhoneNumber(identifier);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      Logger.log(JSON.stringify(user));
  
      const passwordMatches = await this.verifyPassword(password, user.password);
      if (!passwordMatches) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      const payload = { sub: user.id, email: user.email };
      const token = this.jwtService.sign(payload);
      delete user.password;
      return {
        access_token: token,
        user
      };
    }

    // Hash password
  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10); // Generate salt
    return bcrypt.hash(password, salt); // Hash password with salt
  }

  // Verify password
  private async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    Logger.log(plainPassword, hashedPassword);
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
  



