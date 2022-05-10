import { Action, Reducer } from 'redux';
import { handleActions } from 'redux-actions';

import { GNftData, GOwnedNft } from '../../types';
import { ASSETS_GET_ALL, ASSETS_GET_BY_ID } from '../action-types';

export interface AssetsState {
  assets: GNftData;
  asset: GOwnedNft;
}

interface AssetsAction extends Action {
  payload: {
    assets: GNftData,
    asset: GOwnedNft;
  }
}

const initialState: AssetsState = {
  assets: {
    blockHash:'0x00000000000000000000000000000000000000000000000000',
    ownedNfts: [],
    totalCount: 0
  },
  asset: {
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

export const assetsReducer: Reducer<AssetsState, AssetsAction> = handleActions(
  {
    [ASSETS_GET_ALL]: (state: AssetsState, { payload: { assets }}: AssetsAction) => ({
      ...state,
      assets
    }),
    [ASSETS_GET_BY_ID]: (state: AssetsState, { payload: { asset }}: AssetsAction) => ({
      ...state,
      asset
    }),
  },
  initialState,
);
