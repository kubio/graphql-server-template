# GraphQL Server Template

This is a template for Graphql server using graphql-yoga and prisma

- [graphql-yoga](https://github.com/prisma-labs/graphql-yoga)
- [prisma](https://github.com/prisma/prisma)

## Get started

```
$ yarn install
$ cp .env.example .env
# Please edit database info(user, pw, host, database name...etc) in .env file
$ yarn prisma migrate deploy --preview-feature
$ yarn prisma generate
$ yarn start
```

Access to http://localhost:4000

## Update db schema

1. Update datamodels in `schema.prisma`
2. Create migration files and apply it to database

```
$ yarn prisma migrate dev --preview-feature
```

3. Regenerate prisma client

```
$ yarn prisma generate
```

## Update GraphQL Schema

Please edit `src/schema.graphql`

## Generate GraphQL types for Frontend

```
$ yarn generate
```

Please check `.codegen/types.ts`
