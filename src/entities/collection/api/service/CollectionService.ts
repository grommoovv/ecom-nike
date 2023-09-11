import { $axios } from '../../../../shared/api/axios'

export class CollectionService {
  static async getCollection() {
    return (await $axios(``)).data
  }
}
