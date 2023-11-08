import { Injectable, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async generateAccessToken(user): Promise<string> {
    return await this.jwtService.signAsync(
      { username: user.username, email: user.email },
      {
        secret: this.configService.get('JWT_SECRET'),
        expiresIn: this.configService.get('JWT_EXPIRES_IN'),
      },
    );
  }

  async googleLogin(user: any, res) {
    if (!user) {
      throw new HttpException('error', 601);
    }
    const email = user.email[0].value;
    const domain = email.split('@')[1];
    if (domain !== 'sunrint.hs.kr') {
      throw new HttpException('error', 600);
    }
    const front_url = this.configService.get('FRONT_URL');
    const accessToken = this.generateAccessToken(user);
    res.cookie('ACCESS_TOKEN', accessToken);
    res.redirect(front_url);
  }

  async googleLogout(res) {
    const front_url = this.configService.get('FRONT_URL');
    res.clearCookie('ACCESS_TOKEN');
    res.redirect(front_url);
  }
}
