import { Knex } from "knex";
import { Tables } from "../data/tables";

export async function seed(knex: Knex): Promise<void> {
  await knex(Tables.ORDER_STATUS).del();

  await knex(Tables.ORDER_STATUS).insert([
    {
      name: 'paid'
    },
    {
      name: 'pending'
    },
    {
      name: 'canceled'
    },
    {
      name: 'delivered'
    }
  ]);
};
