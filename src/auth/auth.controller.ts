import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleGuard } from './guard/google.guard';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    public readonly config: ConfigService,
  ) {}
  @Get('/google')
  @UseGuards(GoogleGuard)
  googleAuth() {}

  @Get('/google/redirect')
  @UseGuards(GoogleGuard)
  async googleLogin(@Req() req, @Res() res) {
    await this.authService.googleLogin(req.user, res);
  }

  @Get('/logout')
  async googleLogout(@Res() res) {
    await this.authService.googleLogout(res);
  }
}
