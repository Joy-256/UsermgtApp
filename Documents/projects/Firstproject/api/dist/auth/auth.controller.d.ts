import { AuthService } from './auth.service';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<import("../user/entities/user.entity").User>;
    login(loginAuthDto: LoginAuthDto): Promise<{
        access_token: string;
        user: import("../user/entities/user.entity").User;
    }>;
}
