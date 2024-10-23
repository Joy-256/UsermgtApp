import { UserRole } from 'user/entities/user.entity';
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    lanId: string;
    phoneNumber: string;
    email: string;
    role: UserRole;
    password: string;
}
