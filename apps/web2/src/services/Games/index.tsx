import { AxiosInstance } from 'axios';
import { type  GraphQLClient, gql } from 'graphql-request'
import { GamesPaths } from './constans';

interface IOffer {
  img_url?: string;
  description?: string;
  price?: number;
  id: number;
  name?: string;
}

interface PaginatedParams{
  limit?: number;
  offset?: number;
}

interface Filters{
  price?: number;
  name?: string;
  platform?: string;
  genre?: string;
  order?: string;
}

interface SearchParams{
  filters?: Filters;
  paginated?: PaginatedParams;
}

export interface Games{
  getMainOffers(): Promise<IOffer[]>
  getPaginatedGames(params?:SearchParams): Promise<IOffer[]>
}


export class GamesAxios implements Games{
  constructor(private client: AxiosInstance){}
  getPaginatedGames(_params?: SearchParams | undefined): Promise<IOffer[]> {
    throw new Error('Method not implemented.');
  }

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

  private static GET_PAGINATED_GAMES = gql`
  query GET_PAGINATED_GAMES($limit: Int! $offset: Int) {
    games(limit: $limit offset: $offset) {
      description
      id
      img_url
      price
      name
    }
  }`

  constructor(private client: GraphQLClient) {}

  async getMainOffers(limit = 10) {
    const { games } = await this.client
      .request<{games: IOffer[]}>(GamesGraphQL.GET_MAIN_OFFERS, {limit})

    return games;
  }

   async getPaginatedGames(params?: SearchParams): Promise<IOffer[]> {
    const {paginated={} } = params ?? { }
    const {games } = await this.client
      .request<{games: IOffer[]}>(GamesGraphQL.GET_PAGINATED_GAMES, {...paginated})

    return games
  }
}
