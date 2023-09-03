import { faker } from "@faker-js/faker";

function cardFactory() {
  return {
    id: faker.string.uuid(),
    imgUrl: faker.image.urlLoremFlickr({ category: "videogames" }),
    description: faker.lorem.words(4),
    price: faker.commerce.price(),
  };
}

export function seedCard(count) {
  return Array.from({ length: count }, () => cardFactory());
}
