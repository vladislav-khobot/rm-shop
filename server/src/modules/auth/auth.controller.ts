import { Controller, UseGuards, Get, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';

import { appConfig } from 'config/app.config';
import { User } from 'modules/auth/schemas/user.schema';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {

  @Get('google')
  @UseGuards(AuthGuard('google'))
  @ApiOperation({ summary: 'Start login with Google' })
  async googleLogin() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  @ApiOperation({ summary: 'Completion login with Google' })
  async googleRedirect(@Req() req, @Res() res): Promise<void> {
    const jwt: string = req?.user?.jwt || null;
    if (jwt) {
      res.redirect(`${appConfig.login.successURL}/${jwt}`);
    } else {
      res.redirect(appConfig.login.failureURL);
    }
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get user profile' })
  @ApiOkResponse({ type: User })
  @ApiBearerAuth('Authorization')
  async userProfile(@Req() req): Promise<User> {
    const user = req?.user;
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
