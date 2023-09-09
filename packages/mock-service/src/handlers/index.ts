import { graphql } from 'msw'
import { ProductFactory } from '../../../../apps/migration/src/factory/Products'

const factory = new ProductFactory

export const handlers = [
  graphql.query('GET_PAGINATED_GAMES', (_req, res, ctx)=>{
    return res(
      ctx.data({
        games: factory.createMany(10)
      })
    )
  }),
  graphql.query('GET_MAIN_OFFERS', (_req, res, ctx)=>{
    return res(
      ctx.data({
        games: factory.createMany(10)
      })
    )
  })
]
