import type { Knex } from "knex";

// Update with your config settings.
const migrationsDirectory = './src/migrations';
const seedsDirectory = './src/seeds';

const config: { [key: string]: Knex.Config } = {
  development: {
    seeds:{
      directory: seedsDirectory
    },
    migrations:{
      directory: migrationsDirectory
    },
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: migrationsDirectory,
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: migrationsDirectory,
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
