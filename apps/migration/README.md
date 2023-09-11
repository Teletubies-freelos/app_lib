# Migration service

To get help you should

```bash
pnpm knex --help
```

To get help anout migrations

```bash
pnpm knex migrate --help
```

To run all migrations

```bash
pnpm knex migrate:latest
```

To run all seeders

```bash
pnpm knex seed:run
```

If you don't pass any options default env is going to
be development

Development database is going to be a local sqlite
but other enviroments might have other configurations,
see knexfile.ts to properly config connections using enviroment vars
