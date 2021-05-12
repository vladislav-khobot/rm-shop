import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { sign } from 'jsonwebtoken';

import { appConfig } from 'config/app.config';
import { User, UserDocument } from 'modules/auth/schemas/user.schema';
import { JwtPayload } from 'interfaces/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async findUser(providerID: string): Promise<User> {
    return this.userModel.findOne({ providerID }).exec();
  }

  async upsertUser(user: User): Promise<User> {
    const { providerID } = user;
    const existedUser = await this.findUser(providerID);
    if (existedUser) {
      return existedUser;
    }

    const newUser = await this.userModel.create(user);
    return newUser;
  }

  async oauthLogin(user: User): Promise<string> {
    const dbUser = await this.upsertUser(user);

    const payload: JwtPayload = {
      providerID: dbUser.providerID,
    };
    const jwt = sign(payload, appConfig.jwt.secretKey, { expiresIn: appConfig.jwt.expiresIn });

    return jwt;
  }
}
