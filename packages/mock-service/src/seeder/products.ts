import { faker } from "@faker-js/faker";
import { db } from "../factory";

export const seedProducts = (quantity:number) => {
  Array.from({ length: quantity }).forEach(() => {
    db.products.create({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()),
      price_offer: Number(faker.commerce.price()),
      quantity: faker.number.int({ min: 0 }),
      image_url: faker.image.urlPicsumPhotos(),
    });
  });

  return db.products.getAll();
}
