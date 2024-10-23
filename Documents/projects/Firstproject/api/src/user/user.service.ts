import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


    async create(createUserDto: CreateUserDto): Promise<User> {
      const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findPasswordByEmailLANIDorPhoneNumber(identifier: string): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .select('user.password')
      .where('user.email = :identifier', { identifier })
      .orWhere('user.lanId = :identifier', { identifier })
      .orWhere('user.phoneNumber = :identifier', { identifier })
      .getOne();

    return user;
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.userRepository.findOne({where: {id}});
    } catch (error) {
      return error;
    }
  
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, {...updateUserDto});
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
