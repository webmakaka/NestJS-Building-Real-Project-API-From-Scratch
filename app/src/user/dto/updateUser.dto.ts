import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  readonly bio: string;

  readonly image: string;
}
