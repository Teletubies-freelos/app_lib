import { type  GraphQLClient, gql } from 'graphql-request'

interface IOffer {
  img_url?: string;
  description?: string;
  price?: number;
  id: number;
}

export class Games {
  private static GET_MAIN_OFFERS = gql`
    query GET_MAIN_OFFERS($limit: Int!) {
      games(limit: $limit) {
        description
        id
        img_url
      }
    }`
  constructor(private client: GraphQLClient) {}


  async getMainOffers(limit = 10) {
    const { games } = await this.client
      .request<{games: IOffer[]}>(Games.GET_MAIN_OFFERS, {limit})

    console.log(games)
    return games;
  }
}
