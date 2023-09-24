import { graphql } from 'msw'
import { seedProducts } from '../seeder/products';
import { seedOrders } from '../seeder/orders';
import { db } from '../factory';

console.log(Array.from({length: 100}).map(()=> db.products.create()))

export const handlers = [
  graphql.query('GET_PAGINATED_GAMES', async (req, res, ctx)=>{
    const {limit, offset} = req.variables

    return res(
      ctx.data({
        games: db.products.findMany({take: limit, skip: offset})
      })
    )
  }),
  graphql.query('GET_MAIN_OFFERS', (_req, res, ctx)=>{
    return res(
      ctx.data({
        games: db.products.findMany({take: 10})
      })
    )
  }),
  graphql.query('PRODUCT_NVENTORY', (_req, res, ctx)=>{
    return res(
      ctx.data( seedProducts(10))
    )
  }
  ),
  graphql.query('CREATE_ORDER', (_req, res, ctx)=>{

    return res(
      ctx.data( seedOrders(10))
    )
  })

]
