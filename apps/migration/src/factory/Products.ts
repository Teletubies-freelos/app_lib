import {faker} from '@faker-js/faker'
import { ProductsDAO } from "../models/Products";

import type { Factory, PartialBy } from "../types";


export class ProductFactory implements Factory<PartialBy<ProductsDAO, 'id'>>{
  createOne(){
    return {
      description: faker.commerce.productDescription() ,
      image_url: faker.image.urlLoremFlickr({category: 'games'}),
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      quantity: faker.number.int()
    }
  }
  createMany(quantity = 50) {
    return Array.from({length: quantity }).map(()=>this.createOne())
  }
}
