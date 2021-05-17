interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  name: string;
  connection: string;
}

interface GoogleConfig {
  clientID: string;
  clientSecret: string;
  redirectURL: string;
}

interface LoginConfig {
  successURL: string;
  failureURL: string;
}

interface JWTConfig {
  secretKey: string;
  expiresIn: number;
}

export interface AppConfig {
  port: number;
  db: DatabaseConfig;
  google: GoogleConfig;
  login: LoginConfig,
  jwt: JWTConfig,
}
