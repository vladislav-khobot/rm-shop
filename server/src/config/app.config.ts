import * as dotenv  from 'dotenv';
import { toInteger } from 'lodash';

import { AppConfig } from 'interfaces/config';
import { ConfigUtils } from 'utils/ConfigUtils/ConfigUtils';

dotenv.config();

const port = toInteger(process.env.PORT) || 3010;

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;
const connection = `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`

const appConfig: AppConfig = {
  port,
  db: {
    host,
    user,
    password,
    name,
    connection,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectURL: process.env.GOOGLE_REDIRECT_URL,
  },
  login: {
    successURL: process.env.LOGIN_SUCCESS_URL,
    failureURL: process.env.LOGIN_FAILURE_URL,
  },
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    expiresIn: toInteger(process.env.JWT_EXPIRES_IN),
  }
};

export {
  appConfig,
}
