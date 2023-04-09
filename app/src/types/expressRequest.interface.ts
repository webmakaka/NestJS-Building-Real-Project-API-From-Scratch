import { Request } from 'express';
import { UserEntity } from 'src/user/user.entity';

export interface ExpressRequsetInterface extends Request {
  user?: UserEntity;
}
