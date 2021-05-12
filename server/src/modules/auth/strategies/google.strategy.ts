import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from 'modules/auth/auth.service';
import { User } from 'modules/auth/schemas/user.schema';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { appConfig } from 'config/app.config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID: appConfig.google.clientID,
      clientSecret: appConfig.google.clientSecret,
      callbackURL: appConfig.google.redirectURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<void> {
    const { id, displayName, emails, photos } = profile;
    const newUser: User = {
      email: emails[0].value,
      name: displayName,
      avatar: photos[0].value,
      providerID: id,
    }

    try {
      const jwt = await this.authService.oauthLogin(newUser);
      const user = { jwt };

      done(null, user);

    } catch (e: any) {
      done(e, null);
    }
  }
}
