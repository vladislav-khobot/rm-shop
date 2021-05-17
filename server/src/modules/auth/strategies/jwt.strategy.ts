import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { appConfig } from 'config/app.config';
import { AuthService } from 'modules/auth/auth.service';
import { JwtPayload } from 'interfaces/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: appConfig.jwt.secretKey,
    });
  }

  async validate(payload: JwtPayload, done: Function): Promise<void> {
    try {
      const user = await this.authService.findUserByProviderID(payload.providerID);
      // @ts-ignore
      user.id = user._id.toHexString();
      if (user) {
        done(null, user);

      } else {
        done(new UnauthorizedException('User is unauthorized'), null);
      }

    } catch (err: unknown) {
      done(err, null);
    }
  }
}
