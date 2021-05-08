# Rick and Morty T-shirts Shop

A simple e-commerce project that offers funny T-shirts with Rick & Morty heroes.

# Running locally

## Server

Install dependencies:

```shell
cd server
npm install
```

Run server:
```shell
cd server
npm run build
npm run start:dev
```

Server will run on [http://localhost:3010](http://localhost:3010)

### Documentation

After the server is running there is an API documentation available on [http://localhost:3010/docs](http://localhost:3010/docs).

### Environment variables

In order to run server successfully you should have valid `.env` file in the `server` folder:

```
PORT = <application port>
DB_HOST = <address of the DB>
DB_USER = <username for DB>
DB_PASSWORD = <password for DB>
DB_NAME = <DB name>
```

## Client

Install dependencies:

```shell
cd client
npm install
```

Run server:
```shell
cd client
npm run start:dev
```

Client will run on [http://localhost:3000](http://localhost:3000)

