import { ICartProduct, type AppGamesDB } from "./index";

export class CartProductDAO {
  constructor(private db: AppGamesDB) { }

  async getTotalProductsQuantity() {
    return await this.db.products.count()
  }

  async getTotalProductsPrice() {
    return (await this.db.products.toArray())
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
  }

  async addProduct(product: ICartProduct) {
    const productResult = await this.db.products.get({ productId: product.productId })

    if (productResult?.id) {
      return await this.changeQuantity(productResult.id, productResult.quantity + 1)
    }

    return await this.db.products.add(product)
  }

  async deleteProduct(id: number) {
    return await this.db.products.delete(id)
  }

  async changeQuantity(id: number, quantity: number) {
    return await this.db.products.update(id, { quantity })
  }

  async getProducts() {
    return await this.db.products.toArray()
  }

}
