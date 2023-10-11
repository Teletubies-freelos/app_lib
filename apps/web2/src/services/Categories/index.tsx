import { gql, type GraphQLClient } from 'graphql-request';

interface CategoryResponse {
  category_id: string;
  name: string;
}

interface ListOptions {
  limit?: number;
  offset?: number;
  orderBy?: string;
}

export class CategoriesGraphQL {
  static GET_CATEGORIES = gql`
    query GET_CATEGORIES(
      $limit: Int!
      $offset: Int!
    ) {
      Categories(limit: $limit, offset: $offset, order_by: {category_id: desc}) {
        category_id
        name
      }
    }
  `;

  constructor(private client: GraphQLClient) {}

  async list({ limit = 20, offset = 0 }: ListOptions) {
    const { Categories: allCategories } = await this.client.request<{
      Categories: CategoryResponse[];
    }>(CategoriesGraphQL.GET_CATEGORIES, {
      limit,
      offset
    });

    return allCategories;
  }
}
