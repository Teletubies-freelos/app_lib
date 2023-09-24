import { gql } from "graphql-request";

export const GET_PRODUCTS = gql`
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
