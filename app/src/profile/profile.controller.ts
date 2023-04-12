import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from 'src/profile/profile.service';
import { ProfileResponseInterface } from 'src/profile/types/profileResponse.interface';
import { User } from 'src/user/decorators/user.decorator';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':username')
  async getProfile(
    @User('id') currentUserId: number,
    @Param('username') profileUsername: string,
  ): Promise<ProfileResponseInterface> {
    const profile = await this.profileService.getProfile(
      currentUserId,
      profileUsername,
    );
    return this.profileService.buildProfileResponse(profile);
  }
}
