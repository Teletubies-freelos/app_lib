export interface Factory<T>{
  createOne(): T
  createMany(quantity?: number): T[]
}
