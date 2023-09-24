import { gql, type GraphQLClient } from "graphql-request";
import { QueryManyOptions } from "../../types/request";

interface OrdersResponse{
  id: string | number;
  client_name: string;
  client_phone: number;
  client_address: string;
  state_payment: string;
  method_payment: string;
  total: number
}

export class Orders{
  static GET_ORDERS = gql`
    insertar gql 
  `

  constructor(private client: GraphQLClient){}

  async getList({pagination = {}}: QueryManyOptions = {}){
    const { limit = 20, offset = 0 } = pagination

    const { orders } = await this.client
      .request<{orders: OrdersResponse[]}>(Orders.GET_ORDERS, {
        limit,
        offset
      })

    return orders
  }
}
