import { IProduct } from 'entities/product/model/types/product.interface'
import { $axios } from 'shared/api/axios'

export class ProductService {
  static async getProduct(title: IProduct['title']) {
    return (await $axios(title)).data
  }
}
