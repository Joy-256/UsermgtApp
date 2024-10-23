import { JwtService } from '@nestjs/jwt';
import { UserService } from 'user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signup(data: any): Promise<import("../user/entities/user.entity").User>;
    login(identifier: string, password: string): Promise<{
        access_token: string;
        user: import("../user/entities/user.entity").User;
    }>;
    private hashPassword;
    private verifyPassword;
}
