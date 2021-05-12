import { Controller, UseGuards, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';

import { appConfig } from 'config/app.config';
import { User } from 'modules/auth/schemas/user.schema';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {

  @Get('google')
  @ApiOperation({ summary: 'Start login with Google' })
  @UseGuards(AuthGuard('google'))
  async googleLogin() {}

  @Get('google/redirect')
  @ApiOperation({ summary: 'Completion login with Google' })
  @UseGuards(AuthGuard('google'))
  async googleRedirect(@Req() req, @Res() res): Promise<void> {
    const jwt: string = req?.user?.jwt || null;
    if (jwt) {
      res.redirect(`${appConfig.login.successURL}/${jwt}`);
    } else {
      res.redirect(appConfig.login.failureURL);
    }
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiOkResponse({ type: User })
  @ApiBearerAuth('Authorization')
  @UseGuards(AuthGuard('jwt'))
  async userProfile(@Req() req): Promise<User> {
    const user = req?.user;
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
