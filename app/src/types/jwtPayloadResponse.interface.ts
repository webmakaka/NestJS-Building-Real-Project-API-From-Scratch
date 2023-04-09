import { JwtPayload } from 'jsonwebtoken';

export interface JwtResponseInterface extends JwtPayload {
  id: number;
}
