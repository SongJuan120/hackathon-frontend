import { Action, Reducer } from 'redux';
import { handleActions } from 'redux-actions';

import { GRaffles, GOwnedNft } from '../../types';
import { RAFFLES_GET_ALL, RAFFLES_GET_BY_ID, NFT_GET_BY_ID } from '../action-types';

export interface RafflesState {
  raffles: GRaffles[],
  raffle: GRaffles,
  nft: GOwnedNft
}

export interface RafflesByIdState {
  raffles: GRaffles,
}

interface RafflesAction extends Action {
  payload: {
    raffles: GRaffles[],
    raffle: GRaffles,
    nft: GOwnedNft
  }
}

const initialState: RafflesState = {
  raffles: [],
  raffle: {
    raffleId: 0,
    raffleAddress: "",
    nftAddress: "",
    tokenId: "",
    totalTickets: "",
    ticketPrice: "",
    totalPrice: "",
    duration: "",
    seller: "",
    created: "",
    soldTickets: "",
    raffleState: ""
  },
  nft: {
    contract: {
      address: "0x00000000000000000000000000000000000000000000000000"
    },
    id: {
      tokenId: "",
      tokenMetadata: {
        tokenType: ""
      },
    },
    balance: "",
    title: "",
    description: "",
    tokenUri: {
      raw: "",
      gateway: ""
    },
    media: [],
    metadata: {
      name: "",
      image: "",
      description: "",
      external_url: "",
      attributes: []
    },
    timeLastUpdated: ""
  } 
}

export const rafflesReducer: Reducer<RafflesState, RafflesAction> = handleActions(
  {
    [RAFFLES_GET_ALL]: (state: RafflesState, { payload: { raffles }}: RafflesAction) => ({
      ...state,
      raffles
    }),

    [RAFFLES_GET_BY_ID]: (state: RafflesState, { payload: { raffle }}: RafflesAction) => ({
      ...state,
      raffle
    }),

    [NFT_GET_BY_ID]: (state: RafflesState, { payload: { nft }}: RafflesAction) => ({
      ...state,
      nft
    })
  },

  initialState,
);


