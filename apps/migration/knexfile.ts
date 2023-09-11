import type { Knex } from "knex";
import "dotenv/config"

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
      tableName: "knex_migrations",
    }
  },

  production: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: migrationsDirectory,
      tableName: "knex_migrations",
      schemaName: 'public'
    },
    seeds:{
      directory: seedsDirectory
    }
  }

};

module.exports = config;
