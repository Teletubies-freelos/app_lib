import { faker } from "@faker-js/faker";

function cardFactory() {
  return {
    imgUrl: faker.image.urlPicsumPhotos(),
    description: faker.lorem.paragraphs(),
    price: faker.commerce.price(),
  };
}

export function seedCard(count: number) {
  return Array.from({ length: count }, () => cardFactory());
}
