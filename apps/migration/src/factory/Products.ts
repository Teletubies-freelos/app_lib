import {faker} from '@faker-js/faker'
import { ProductsDAO } from "../models/Products";

import type { Factory, PartialBy } from "../types";


export class ProductFactory implements Factory<PartialBy<ProductsDAO, 'id'>>{
  createOne(){
    return {
      id: faker.string.uuid() as any,
      description: faker.commerce.productDescription() ,
      img_url: faker.image.urlLoremFlickr({category: 'games'}),
      name: faker.commerce.productName(),
      price: Number(faker.number.float({max:1000}).toFixed(2)),
      quantity: faker.number.int({max:100})
    }
  }
  createMany(quantity = 50) {
    return Array.from({length: quantity }).map(()=>this.createOne())
  }
}
