import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/config';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UserResponseInterface } from 'src/user/types/userResponse.interface';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userByEmail = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    const userByUsername = await this.userRepository.findOne({
      where: { email: createUserDto.username },
    });

    if (userByEmail || userByUsername) {
      throw new HttpException(
        'Email or username are taken!',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);
    return await this.userRepository.save(newUser);
  }

  generateJwt(user: UserEntity): string {
    return sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
    );
  }

  buildUserResponse(user: UserEntity): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJwt(user),
      },
    };
  }
}
