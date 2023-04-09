import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ExpressRequsetInterface } from 'src/types/expressRequest.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<ExpressRequsetInterface>();

    if (request.user) {
      return true;
    }

    throw new HttpException('Not authorized!', HttpStatus.UNAUTHORIZED);
  }
}
