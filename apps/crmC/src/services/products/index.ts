import { BaseRecord, DataProvider, ParsedParams } from "@refinedev/core";

import { GraphQLClient } from "graphql-request";
import { GET_PRODUCTS } from "./graphql";

export const ProductsProvider = (client: GraphQLClient): DataProvider =>{
  return {
    async getList({pagination}) {
      const {current = 0, pageSize = 20} = pagination ?? {}

      const {games} = await client.request<BaseRecord>(GET_PRODUCTS, {
        limit: pageSize,
        offset: current*pageSize
      })

      return {
        data: games,
        total: 100
      }
    },
    create(params) {
      throw 'not implemented'
    },
    deleteOne(params) {
      throw 'not implemented'
    },
    getApiUrl() {
      return client.requestConfig.referrer ?? ''
    },
    getOne(params) {
      throw 'not implemented'
    },
    update(params) {
      throw 'not implemented'
    },
  }
}

