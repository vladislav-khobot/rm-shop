import * as dotenv  from 'dotenv';
dotenv.config();

interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  name: string;
  connection: string;
}

interface AppConfig {
  port: string | number;
  db: DatabaseConfig;
}

const port = process.env.PORT || 3010;

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;
const connection = `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`

export const appConfig: AppConfig = {
  port,
  db: {
    host,
    user,
    password,
    name,
    connection,
  }
};
