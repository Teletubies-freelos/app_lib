import { Knex } from "knex";
import { ProductsDAO } from "../models/Products";
import { TABLE_NAMES } from "../models/constants";
import { ProductFactory } from "../factory/Products";

export class ProductsSeeder{
  constructor(
    private factory: ProductFactory, 
    private table: Knex<ProductsDAO>
  ){}

  createProducts(quantity?: number){
    return this.table.batchInsert(
      TABLE_NAMES.PRODUCTS, 
      this.factory.createMany(quantity)
    )
  }
}


