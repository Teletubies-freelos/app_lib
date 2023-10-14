import { Knex } from "knex";
import { Tables } from "../data/tables";

export async function seed(knex: Knex): Promise<void> {
  await knex(Tables.PAYMENT_METHOD).del();

  await knex(Tables.PAYMENT_METHOD).insert([
    {
      name: 'yape'
    },
    {
      name: 'plin'
    },
    {
      name: 'transference'
    }
  ]);
};
