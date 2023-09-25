import { GraphQLClient, gql } from 'graphql-request';

interface SavePurchasePayload {
  address: string;
  client_name: string;
  createDate: string;
  payment_method: string;
  payment_state: string;
  phone: number;
  products: string;
  total: string;
  code: string;
}

interface PurchaseResponse {
  coidde: string | number;
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
      $clientName: String!
      $code: String!
      $createDate: String!
      $paymentMethod: String!
      $paymentState: String!
      $phone: Int!
      $products: String!
      $total: String!
    ) {
      insert_Orders_one(
        object: {
          address: $address
          client_name: $clientName
          code: $code
          create_date: $createDate
          payment_method: $paymentMethod
          payment_state: $paymentState
          phone: $phone
          products: $products
          total: $total
        }
      ) {
        id
      }
    }
  `;

  constructor(private client: GraphQLClient) {}

  async savePurchase(payload: SavePurchasePayload) {
    const { insert_Orders_one } = await this.client.request<{
      insert_Orders_one: { id: string | number };
    }>(PurchaseGraphql.SAVE_PURCHASE, { ...payload });

    return insert_Orders_one;
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
