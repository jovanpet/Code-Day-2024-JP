This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Testing

```bash
npm test
```

## Linting (vs code)

this needs to go in vscode user settings along with eslint extention
```"eslint.validate": [ "javascript", "javascriptreact", "html", "typescriptreact" ],```

## Linting (terminal)
```npm run lint```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## How to get started in a testing environment
Install dependencies: 
```bash
$ npm i
```
Create a docker container running Postgres for testing:
```bash
$ docker run --name pg -d -e POSTGRES_PASSWORD=pass -p 5432:5432 postgres
```
Create a `.env` file at the root at the project with the following contents:
```dotenv
# ~/.env
DATABASE_URL="postgresql://postgres:pass@localhost:5432/postgres"
```
Run the following command to migrate the current schema in `~/prisma/schema.prisma` to your Postgres database running in your docker container:
```bash
$ npx prisma migrate dev --name init
```
From here, you should have the 3 tables set up in your Postgres Database named `Postgres` and can use an app like pgAdmin to connect to the server and visualize the tables and execute SQL queries, or the `psql` CLI to connect to it as well.
### Using Prisma
make sure you have the `@prisma/client` installed if not already using
```bash
$ npm install @prisma/client --save-dev
```
Run this command to build the `PrismaClient` object that allows you to interact with the data in the testing environment:
```bash
$ npx prisma generate
```
You can now import that `PrismaClient` object with intellisense and type safety to run queries on the testing database (see [documentation](https://www.prisma.io/docs/orm/prisma-client/queries/crud) for how to use this object), for example:
```javascript
// some-test-file.js
import { PrismaClient } from '@prisma/client'; // Import PrismaClient

const prisma = new PrismaClient(); // Initialize PrismaClient

const user = await prisma.user.create({ // Create a User (DOES NOT FOLLOW OUR SCHEMA, JUST AN EXAMPLE)
  data: {
    email: 'elsa@prisma.io',
    name: 'Elsa Prisma',
  },
});
```
Run the development server with
```bash
$ npm run dev
```
To view your application!