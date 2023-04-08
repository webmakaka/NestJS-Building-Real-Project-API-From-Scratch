import { UserType } from 'src/user/types/user.type';

export interface UserResponseInterface {
  user: UserType & { token: string };
}
