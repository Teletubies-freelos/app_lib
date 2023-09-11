import { Model } from 'objection'
import { TABLE_NAMES } from './constants'

export interface ProductsDAO {
  id: number;
  name: string;
  description: string;
  price: number;
  img_url: string;
  quantity: number;
}

export class Products extends Model{
  static override tableName = TABLE_NAMES.PRODUCTS
}

