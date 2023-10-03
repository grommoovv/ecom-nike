import { Product } from '../types'
import { $axios } from './axios'

class ApiService {
  static async getProducts() {
    return (await $axios(``)).data
  }

  static async getProduct(title: Product['title']) {
    return (await $axios(title)).data
  }
}

export { ApiService }
