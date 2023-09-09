import { Knex } from "knex";
import { TABLE_NAMES } from "../models/constants";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(TABLE_NAMES.PRODUCTS, function(table){
      table.increments('id')
      table.string('name')
      table.string('description')
      table.integer('quantity')
      table.float('price')
      table.string('image_url')
    })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable(TABLE_NAMES.PRODUCTS)
}

