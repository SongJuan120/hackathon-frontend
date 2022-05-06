import { http } from './api'
import {
  GNftData,
} from '../types'

class AssetsService {

  async getAssets (address: string) {
    const res = await http.get<GNftData>(`/users/getAssets/${address}`)
    return res.data;
  }

}

export const assetsService = new AssetsService()
