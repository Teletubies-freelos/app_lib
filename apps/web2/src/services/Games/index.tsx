import { AxiosInstance } from 'axios';
import { type  GraphQLClient, gql } from 'graphql-request'
import { GamesPaths } from './constans';

interface IOffer {
  img_url?: string;
  description?: string;
  price?: number;
  id: number;
}

export interface Games{
  getMainOffers(): Promise<IOffer[]>
}


export class GamesAxios implements Games{
  constructor(private client: AxiosInstance){}

  async getMainOffers() {
    const { data } = await this.client.get<IOffer[]>(GamesPaths.OFFERS);

    return data;
  }

}

export class GamesGraphQL implements Games {
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
      .request<{games: IOffer[]}>(GamesGraphQL.GET_MAIN_OFFERS, {limit})

    return games;
  }
}
