export declare enum UserRole {
    ADMIN = "ADMIN",
    APPROVER = "APPROVER",
    SALES = "SALES",
    SUPER_ADMIN = "SUPER_ADMIN",
    FINANCE = "FINANCE",
    DOCUMENT_APPROVER = "DOCUMENT_APPROVER",
    SUPPORT = "SUPPORT",
    GENERAL = "GENERAL"
}
export declare class User {
    id: number;
    role: UserRole;
    firstName: string;
    lastName: string;
    lanId: string;
    email: string;
    phoneNumber: string;
    password: string;
    isOnline: boolean;
    lastSeen: Date;
}
