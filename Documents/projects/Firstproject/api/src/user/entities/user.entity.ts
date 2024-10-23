import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

export enum UserRole {
  ADMIN = 'ADMIN',
  APPROVER = 'APPROVER',
  SALES = 'SALES',
  SUPER_ADMIN = 'SUPER_ADMIN',
  FINANCE = 'FINANCE',
  DOCUMENT_APPROVER = 'DOCUMENT_APPROVER',
  SUPPORT = 'SUPPORT',
  GENERAL = 'GENERAL',
  }
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.GENERAL })
    role: UserRole;
  
    @Column({ type: 'varchar', length: 255 })
    firstName: string;
  
    @Column({ type: 'varchar', length: 255 })
    lastName: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    lanId: string;
  
    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
    phoneNumber: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, select: false })
    password: string;
  
    @Column({ nullable: true, default: false })
    isOnline: boolean;
      
    @Column({ type: 'date', nullable: true })
    lastSeen: Date;
  
}
