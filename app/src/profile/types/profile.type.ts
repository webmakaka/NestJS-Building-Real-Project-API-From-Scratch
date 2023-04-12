import { UserType } from 'src/user/types/user.type';

export type ProfileType = UserType & { following: boolean };
