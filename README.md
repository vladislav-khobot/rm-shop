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
# Common
PORT = <application port>

# Database
DB_HOST = <address of the DB>
DB_USER = <username for DB>
DB_PASSWORD = <password for DB>
DB_NAME = <DB name>

# Google OAuth
GOOGLE_CLIENT_ID = <Google Client ID>
GOOGLE_CLIENT_SECRET = <Google Client Secret>
GOOGLE_REDIRECT_URL = <Valid Redirect URL>

# Front-end login pages
LOGIN_SUCCESS_URL = <Example: http://localhost:3000/login/success>
LOGIN_FAILURE_URL = <Example: http://localhost:3000/login/failure>

# JWT parameters
JWT_SECRET_KEY = <JWT Secret Key>
JWT_EXPIRES_IN = <How long JWT lives>
```

## Client

Install dependencies:

```shell
cd client
npm install
```

Run client:
```shell
cd client
npm run start
```

Client will run on [http://localhost:3000](http://localhost:3000)

