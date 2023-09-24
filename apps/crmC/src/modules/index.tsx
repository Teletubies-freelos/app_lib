import { GraphQLClient } from "graphql-request";
import { env } from "../config/env";

export const graphqlClient = new GraphQLClient(env.HASURA_GRAPHQL_URL)
