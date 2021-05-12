import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthController } from 'modules/auth/auth.controller';
import { AuthService } from 'modules/auth/auth.service';
import { GoogleStrategy } from 'modules/auth/strategies/google.strategy';
import { JwtStrategy } from 'modules/auth/strategies/jwt.strategy';
import { User, UserSchema } from 'modules/auth/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema,
    }]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy,
  ],
  exports: [JwtStrategy],
})
export class AuthModule {}
