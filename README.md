# nest-ts-hunt

[![Build Status](https://travis-ci.org/denisecase/nest-ts-hunt.svg?branch=main)](https://travis-ci.org/denisecase/nest-ts-hunt)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dabde95955984dd08493709c421c7da6)](https://app.codacy.com/gh/denisecase/nest-ts-hunt?utm_source=github.com&utm_medium=referral&utm_content=denisecase/nest-ts-hunt&utm_campaign=Badge_Grade)
![GitHub repo size](https://img.shields.io/github/repo-size/denisecase/nest-ts-hunt?style=flat)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![Known Vulnerabilities](https://snyk.io/test/github/denisecase/nest-ts-hunt/badge.svg?targetFile=package.json)](https://snyk.io/test/github/denisecase/nest-ts-hunt?targetFile=package.json)


## Links

- [Hosted App](https://nest-ts-hunt.herokuapp.com/)
- [Source](https://github.com/denisecase/nest-ts-hunt)

## Description

Example REST app with Handlebars, TypeORM, Postgres, JWT auth, NodeMailer, Mailgun

## Requirements

- Node.js (comes with npm)
- Git
- Nest CLI `npm i -g @nestjs/cli`
- Mailgun free account

## Restore .env 

Copy .env-example to .env and complete the necessary informaiton. 

## Verify datastore config

Review ormconfig.json.

## Install Dependencies

```pwsh
npm install
```

## Run the app

```pwsh
npm run start
npm run start:dev
npm run start:prod
```

## Test

```pwsh
npm run test
npm run test:e2e
npm run test:cov
```

## Additional Example Commands

```pwsh
nest g resource team
nest g interface team team
nest g resource change-password
nest g resource forgot-password
nest g resource login
nest g resource register
npm run typeorm migration:generate -- -n migrationNameHere
npm run typeorm migration:run
```

## Notes

- @nest.js/config uses .env

## References

- [Nest.js](https://nestjs.com/)
- [Tony133 Nest Boilerplate JWT](https://github.com/Tony133/nestjs-api-boilerplate-jwt)
- [Nest.js Users and Auth](https://www.codemag.com/Article/2001081/Nest.js-Step-by-Step-Part-3-Users-and-Authentication)