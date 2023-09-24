
import { faker } from "@faker-js/faker";
import { db } from "../factory";

export const seedOrders = (quantity:number) => {
  Array.from({ length: quantity }).forEach(() => {
    db.orders.create({
      client_name: faker.person.firstName(),
      client_phone: faker.phone.number(),
      client_address: faker.location.direction(),
      state_payment: 'Pendiente',
      method_payment: 'Efectivo',
      total: faker.number.float({max:1000}),
    });
  });

  return db.orders.getAll();
}
