# Migrations

## Basic info

In order to manage migrations we are using the tool [migrate-mongo](https://github.com/seppevs/migrate-mongo).

Also there is a detailed guide how to use this tool: [All you need to know about MongoDB schema migrations in node.js](https://softwareontheroad.com/database-migration-node-mongo/).

> Note: you should build application first before you can use migration tool
> (because `migrate-mongo-config.js` requires app config from the `dist` folder)

## NPM scripts

Create migration:
```shell
npm run migrate:create name-og-your-migration
```

Apply migrations:
```shell
npm run migrate:up
```

Downgrade migrations:
```shell
npm run migrate:down
```

Check migrations status:
```shell
npm run migrate:status
```
