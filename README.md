# Hack The Ban - Border Buddy

[![Stories in Ready](https://badge.waffle.io/EmilyDev/Hack-The-Ban.png?label=ready&title=Ready)](https://waffle.io/EmilyDev/Hack-The-Ban)
[![CircleCI](https://circleci.com/gh/BorderBuddy/Border-Buddy/tree/master.svg?style=svg&circle-token=e6542681d7c1b67287fe02caf10508ed6087dd03)](https://circleci.com/gh/BorderBuddy/Border-Buddy/tree/master)

## Getting Started

Initial setup: 

### Database setup:

- Install/start postgres
 
```
$ brew install postgres
$ brew services start postgres
```

- Create database

```
$ psql -U postgres
 > CREATE DATABASE BorderBuddy;
```
- Get the `.env` file from your another team member

- Migrate 

```
$ npm run migrate
```

**To rollback the last migration, run:**
 
```
$ npm run migrate:undo
```

- Seed the database

```
$ npm run seed
```

### Running the app

Install dependencies

```
$ npm install
```

To run the API, run: 

```
$ npm start
```

Navigate to localhost:3000.

For the webpack dev server, run the following.

```
$ npm run dev
```

You can now visit your dev server at localhost:8080. To interact withe API, make sure your API server is running on port 3000.
webpack-dev-server will proxy through any requests to 8080 to the API running on 3000.

To create the production bundle file (output as `dist/fund.js`), run:

```
$ npm run build
```

The output can be viewed at localhost:3000

## Testing

Tests use [Mocha](http://mochajs.org/) and [Chai.js](http://chaijs.com/). New tests should be included in the `test` directory (see `test/example.js` for an example test).

To execute the test suite, run `npm test`.
