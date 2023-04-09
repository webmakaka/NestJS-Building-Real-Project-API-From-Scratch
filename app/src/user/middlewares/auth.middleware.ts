import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { ExpressRequsetInterface } from 'src/types/expressRequest.interface';

import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/config';
import { JwtResponseInterface } from 'src/types/jwtPayloadResponse.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequsetInterface, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(token, JWT_SECRET) as JwtResponseInterface;
      const user = await this.userService.findById(decode.id);
      req.user = user;
      console.log('req.user', req.user);
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
