import { http } from './api'
import {
  GRaffles,
  GSoldHistory
} from '../types'

class RafflesService {

  async getRaffles () {
    const res = await http.get<GRaffles>(`/raffles/filterByState/0,1`)
    return res.data;
  }

  async getRafflesById (id: number) {
    const res = await http.get<GRaffles>(`/raffles/getByRaffleid/${id}`)
    return res.data;
  }

  async getSoldHistory (id: number) {
    const res = await http.get<GSoldHistory[]>(`/raffles/getSoldHistory/${id}`)
    console.log('this is getSoldHistory', res);
    return res.data;
  }
}

export const rafflesService = new RafflesService()
