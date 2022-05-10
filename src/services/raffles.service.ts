import { http } from './api'
import {
  GRaffles,
} from '../types'

class RafflesService {

  async getRaffles () {
    const res = await http.get<GRaffles>(`/raffles/all`)
    return res.data;
  }

  async getRafflesById (id: number) {
    const res = await http.get<GRaffles>(`/raffles/getByRaffleid/${id}`)
    console.log('this is rafflesModule', res);
    return res.data;
  }

}

export const rafflesService = new RafflesService()
