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
}
