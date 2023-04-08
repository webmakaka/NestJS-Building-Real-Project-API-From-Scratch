import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/createUser.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
