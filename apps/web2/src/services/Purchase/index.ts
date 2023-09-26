import { GraphQLClient, gql } from 'graphql-request';

export interface SavePurchasePayload {
  address: string;
  client_name: string;
  createDate: string;
  payment_method: string;
  payment_state: boolean;
  phone: number;
  products: string;
  total: string;
  code: string;
}

export class PurchaseGraphql {
  private static GET_PURCHASE_CODE = gql`
    query GET_PURCHASE_CODE($code: !String){
      purchase(code: $code){
        code
      }
    }
  `;
  // TODO: design contract to save purchase

  private static SAVE_PURCHASE = gql`
    mutation MyMutation(
      $address: String!
      $client_name: String!
      $code: String!
      $createDate: date!
      $payment_method: String!
      $payment_state: Boolean!
      $phone: Int!
      $products: json!
      $total: money!
    ) {
      insert_Orders_one(
        object: {
          address: $address
          client_name: $client_name
          code: $code
          create_date: $createDate
          payment_method: $payment_method
          payment_state: $payment_state
          phone: $phone
          products: $products
          total: $total
        }
      ) {
        order_id
      }
    }
  `;

  constructor(private client: GraphQLClient) {}

  async savePurchase(payload: SavePurchasePayload) {
    console.log(payload);
    await this.client.request<{
      insert_Orders_one: { id: string | number };
    }>(PurchaseGraphql.SAVE_PURCHASE, { ...payload });

    return payload.code;
  }

  /*   async createOne(payload: CreateGamesPayload) {
    const { insert_products_one } = await this.client.request<{
      insert_products_one: { id: string | number };
    }>(Products.CREATE_PRODUCT, { ...payload });

    return insert_products_one;
  }
 */

  /* async originalSavePurchase(): Promise<string> {
    const tempCode = this.uuidGenerator.randomUUID();

    const { code } = await this.client.request<{ code: string }>(
      PurchaseGraphql.GET_PURCHASE_CODE,
      {
        code: tempCode,
      },
    );

    if (code) return await this.originalSavePurchase();

    await this.client.request(PurchaseGraphql.SAVE_PURCASHE);

    return tempCode;
  }`

  async savePurchase() {
    try {
      return await this.originalSavePurchase();
    } catch (error) {
      return this.uuidGenerator.randomUUID();
    }
  } */
}
