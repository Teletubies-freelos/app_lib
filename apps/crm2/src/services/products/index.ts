import { type GraphQLClient, gql } from 'graphql-request';
import { QueryManyOptions } from '../../types/request';

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
  price?: number;
}

export interface GetProductFilters {
  categoryId?: number | string;
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
  `;

  static CREATE_PRODUCT = gql`
    mutation CREATE_PRODUCT(
      $description: String
      $imag_url: String
      $name: String
      $price: Float
      $offer_price: Float
      $quantity: Int
    ) {
      insert_products_one(
        object: {
          description: $description
          imag_url: $imag_url
          name: $name
          offer_price: $offer_price
          quantity: $quantity
        }
      ) {
        id
      }
    }
  `;

  static GET_PRODUCT = gql`
    query GetProducts($limit: Int, $offset: Int, $categoryId: Int) {
      Products(
        limit: $limit
        offset: $offset
        order_by: { category_id: desc }
        where: { category_id: { _eq: $categoryId } }
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

  async getList({
    pagination = {},
    filters = {},
  }: QueryManyOptions<GetProductFilters> = {}) {
    const { limit = 20, offset = 0 } = pagination;
    const { categoryId } = filters;

    const { games } = await this.client.request<{ games: GamesResponse[] }>(
      Products.GET_PRODUCT,
      { limit, offset, categoryId: Number(categoryId) },
    );

    return games;
  }

  async createOne(payload: CreateGamesPayload) {
    const { insert_products_one } = await this.client.request<{
      insert_products_one: { id: string | number };
    }>(Products.CREATE_PRODUCT, { ...payload });

    return insert_products_one;
  }
}
