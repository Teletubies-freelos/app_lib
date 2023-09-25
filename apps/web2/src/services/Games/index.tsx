import { AxiosInstance } from 'axios';
import { type GraphQLClient, gql } from 'graphql-request';
import { GamesPaths } from './constans';
import { IOffer } from '../../types/games';
import { SearchParams } from '../../types';

export interface Games {
  getMainOffers(): Promise<IOffer[]>;
  /*   getPaginatedGames(params?: SearchParams): Promise<IOffer[]>; */
}

export class GamesAxios implements Games {
  constructor(private client: AxiosInstance) {}
  /* getPaginatedGames(_params?: SearchParams | undefined): Promise<IOffer[]> {
    throw new Error('Method not implemented.');
  } */

  async getMainOffers() {
    const { data } = await this.client.get<IOffer[]>(GamesPaths.OFFERS);

    return data;
  }
}

export class GamesGraphQL implements Games {
  private static GET_MAIN_OFFERS = gql`
    query GET_MAIN_OFFERS($limit: Int!) {
      Products(limit: $limit) {
        quantity
        product_id
        price_offer
        price
        name
        is_visible
        image_url
        description
        category_id
      }
    }
  `;

  private static GET_PAGINATED_GAMES = gql`
    query GetProducts($limit: Int, $offset: Int) {
      Products(
        order_by: { product_id: desc }
        where: {}
        limit: $limit
        offset: $offset
      ) {
        quantity
        product_id
        price_offer
        price
        name
        is_visible
        image_url
        description
        category_id
      }
    }
  `;

  constructor(private client: GraphQLClient) {}

  async getMainOffers(limit = 10) {
    const { games } = await this.client.request<{ games: IOffer[] }>(
      GamesGraphQL.GET_MAIN_OFFERS,
      { limit },
    );

    return games;
  }

  async getPaginatedGames(limit: number, offset: number) {
    const { Products } = await this.client.request<{ Products: IOffer[] }>(
      GamesGraphQL.GET_PAGINATED_GAMES,
      { limit, offset },
    );

    return Products;
  }
}
