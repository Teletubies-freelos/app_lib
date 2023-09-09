import { Knex } from "knex";
import { ProductsSeeder } from "../seeders/Products";
import { ProductFactory } from "../factory/Products";

export const seed = async function (knex: Knex) {
  const seeder = new ProductsSeeder(new ProductFactory(), knex)

  await seeder.createProducts()
}
