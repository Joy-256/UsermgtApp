import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from Bearer token
      ignoreExpiration: false, // Reject expired tokens
      secretOrKey: 'your-secret-key', // Use environment variables in production!
    });
  }

  async validate(payload: any) {
    // Attach user info to request object
    return { userId: payload.sub, email: payload.email };
  }
}
