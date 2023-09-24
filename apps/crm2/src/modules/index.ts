import { GraphQLClient } from "graphql-request";
import { env } from "../config";
import { Products } from "../services/products";
import { Orders } from "../services/orders";

export const graphqlClient =  new GraphQLClient(env.HASURA_GRAPHQL_URL)


export const productsClient = new Products(graphqlClient);

export const ordersClient = new Orders(graphqlClient)
