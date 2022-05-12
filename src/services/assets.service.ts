import { http } from './api'
import {
  GNftData,
} from '../types'

class AssetsService {

  async getAssets (address: string) {
    const res = await http.get<GNftData>(`/nfts/getAssets/${address}`)
    return res.data;
  }

  async getAssetById (address: string, id: number) {
    const res = await http.get<GNftData>(`/nfts/getAsset/${address}/${id}`)
    return res.data;
  }
}

export const assetsService = new AssetsService()
