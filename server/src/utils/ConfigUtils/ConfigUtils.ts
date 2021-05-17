import * as Joi from 'joi';
import { AppConfig } from 'interfaces/config';

const stringRequired = Joi.string().required();
const numberRequired = Joi.number().required();

export class ConfigUtils {

  static createSchema(): Joi.Schema {
    const schema = Joi.object({
      port: numberRequired,
      db: Joi.object({
        host: stringRequired,
        user: stringRequired,
        password: stringRequired,
        name: stringRequired,
        connection: stringRequired,
      }),
      google: Joi.object({
        clientID: stringRequired,
        clientSecret: stringRequired,
        redirectURL: stringRequired,
      }),
      login: Joi.object({
        successURL: stringRequired,
        failureURL: stringRequired,
      }),
      jwt: Joi.object({
        secretKey: stringRequired,
        expiresIn: numberRequired.greater(0),
      }),
    });

    return schema;
  }

  static validate(config: AppConfig): boolean {
    const schema = ConfigUtils.createSchema();
    const { error } = schema.validate(config, { abortEarly: false });
    if (!error) {
      return true;
    }

    console.log('-------------------------------------------------');
    console.log('There are errors with your environment variables:');
    console.log('');

    error.details.forEach(item => {
      console.log(`- ${item.message}`);
    });
    console.log('-------------------------------------------------');
    console.log('');

    return false;
  }
}
