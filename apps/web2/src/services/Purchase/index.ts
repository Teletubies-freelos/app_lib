import { GraphQLClient, gql } from "graphql-request";
import type ShortUniqueId from 'short-unique-id'

export class PurchaseGraphql{
  private static GET_PURCHASE_CODE = gql`
    query GET_PURCHASE_CODE($code: !String){
      purchase(code: $code){
        code
      }
    }
  `
  // TODO: design contract to save purchase
  private static SAVE_PURCASHE = gql`
    mutation SAVE_PURCASHE(){

    } 
  `

  constructor(private client: GraphQLClient, private uuidGenerator: ShortUniqueId){}

  async originalSavePurchase(): Promise<string> {
    const tempCode = this.uuidGenerator.randomUUID();
    
    const { code } = await this.client
      .request<{code: string}>(PurchaseGraphql.GET_PURCHASE_CODE, {
        code: tempCode
      })

    if(code)
      return await this.originalSavePurchase()

    await this.client
      .request(PurchaseGraphql.SAVE_PURCASHE)

    return tempCode
  }

  async savePurchase(){
    try {
      return await this.originalSavePurchase()
    } catch (error) {
      return this.uuidGenerator.randomUUID();
    }
  }
}
