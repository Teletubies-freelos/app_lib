import { type GraphQLClient, gql } from 'graphql-request'
import { QueryManyOptions } from '../../types/request'

export interface GamesResponse {
  id: string | number;
  name: string;
  description: string;
  price: number;
  price_offer: number;
  quantity: number;
  image_url: string;
}

export interface CreateGamesPayload {
  description?: string; 
  imag_url?: string; 
  name?: string; 
  offer_price?: number;
  quantity?: number;
  price?: number
}


export class Products {
  static GET_LIST = gql`
    query GET_PAGINATED_GAMES($limit: Int!, $offset: Int) {
      games(limit: $limit, offset: $offset) {
        description
        id
        img_url
        price
        name
      }
    }
  `

  static CREATE_PRODUCT = gql`
    mutation CREATE_PRODUCT(
      $description: String,
      $imag_url: String,
      $name: String,
      $price: Float,
      $offer_price: Float,
      $quantity: Int
    ) {
      insert_products_one(
        object : { 
          description: $description, 
          imag_url: $imag_url, 
          name: $name, 
          offer_price: $offer_price,
          quantity: $quantity
        }){
          id
        }
    }
  `
  constructor(private client: GraphQLClient){}

  async getList({
    pagination = {}
  }: QueryManyOptions = {}){
    const {limit= 20, offset = 0} = pagination;

    const { games } = await this
      .client
      .request<{games: GamesResponse[]}>(Products.GET_LIST, {limit, offset})

    return games
  }

  async createOne(payload : CreateGamesPayload){
    
    const { insert_products_one } = await this
      .client
      .request<{ insert_products_one: {id: string | number} }>(Products.CREATE_PRODUCT, {...payload})

    return insert_products_one;
  }
}
