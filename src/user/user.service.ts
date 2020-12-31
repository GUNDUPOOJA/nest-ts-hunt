import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { IUser } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';
import { UserProfileDto } from './dto/user-profile.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}


  public async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }
    return user;
  }

  public async findById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }


  public async create(userDto: UserDto): Promise<IUser> {
    try {
      return await this.userRepository.save(userDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }


  public async updateByEmail(email: string): Promise<UserEntity> {
    try {
      const user = await this.userRepository.findOne({ email: email });
      user.password = bcrypt.hashSync(
        Math.random()
          .toString(36)
          .slice(-8),
        8,
      );
      
      return await this.userRepository.save(user);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }


  public async updateByPassword(
    email: string,
    password: string,
  ): Promise<UserEntity> {
    try {
      const user = await this.userRepository.findOne({ email: email });
      user.password = bcrypt.hashSync(password, 8);

      return await this.userRepository.save(user);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }

  }


  public async updateProfileUser(id: string, userProfileDto: UserProfileDto): Promise<UserEntity> {
    try {
      const user = await this.userRepository.findOne({id: +id});
      user.email = userProfileDto.email;
      return await this.userRepository.save(user);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }


}
